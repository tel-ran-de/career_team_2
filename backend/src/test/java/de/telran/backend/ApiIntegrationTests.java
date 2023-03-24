package de.telran.backend;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.hamcrest.Matchers.containsString;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class ApiIntegrationTests {

    @Autowired
    MockMvc mockMvc;


    @Test
    public void givenSearchValue_whenSearch_thenReturnListVideos() throws Exception{

        String value = "Man";
        mockMvc.perform(
                        MockMvcRequestBuilders.get("/profession/search?name={value}", value)
                                .content("")
                                .contentType(MediaType.APPLICATION_JSON)
                )
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].name", containsString(value)))
        ;
    }

    @Test
    public void responseListVideo_thenReturnListVideos() throws Exception{

        mockMvc.perform(
                        MockMvcRequestBuilders.get("/video")
                                .content("")
                                .contentType(MediaType.APPLICATION_JSON)
                )
                .andExpect(status().isOk());
    }

    @Test
    public void responseListCategories_thenReturnListCategories() throws Exception{

        mockMvc.perform(
                        MockMvcRequestBuilders.get("/category")
                                .content("")
                                .contentType(MediaType.APPLICATION_JSON)
                )
                .andExpect(status().isOk());
    }

    @Test
    public void responseListCategoryTypes_thenReturnListCategoryTypes() throws Exception{

        mockMvc.perform(
                        MockMvcRequestBuilders.get("/category_types")
                                .content("")
                                .contentType(MediaType.APPLICATION_JSON)
                )
                .andExpect(status().isOk());
    }
}
