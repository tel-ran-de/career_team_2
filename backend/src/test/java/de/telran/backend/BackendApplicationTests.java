package de.telran.backend;

import de.telran.backend.entity.Category;
import de.telran.backend.entity.CategoryType;
import de.telran.backend.entity.Profession;
import de.telran.backend.entity.Video;
import de.telran.backend.repository.CategoryRepository;
import de.telran.backend.repository.CategoryTypeRepository;
import de.telran.backend.repository.ProfessionRepository;
import de.telran.backend.repository.VideoRepository;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT) 
class BackendApplicationTests {

    @Autowired
    private VideoRepository videoRepository;
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private CategoryTypeRepository categoryTypeRepository;

    @Autowired
    private ProfessionRepository professionRepository;


    @Test
    void listProfessionsContainingSubstring() {
        List<Profession> all = professionRepository.findByNameContainsIgnoreCase("Man");
        assertEquals(true, !all.isEmpty());
        assertEquals(4, all.size());

    }

    @Test
    void listAllVideoFindByNameContaining() {
        List<Video> all2 = videoRepository.findByNameContainingIgnoreCase("Day");
        assertEquals(true, !all2.isEmpty());
        assertEquals(33, all2.size());
    }
    @Test
    void listAllVideoFindBySubstringInName(){
        List<Video> all3 = videoRepository.findByNameContainingIgnoreCase("IT");
        System.out.println(all3);
        assertEquals(true, !all3.isEmpty());
    }

    @Test
    void getListOfAllCategoriesForAPIResponse() {
        List<Category> allCategories = categoryRepository.findAll();
        assertEquals(41, allCategories.size());
        assertEquals(true, allCategories.stream().anyMatch(category -> category.getName().equals("Small enterprises")));
    }

    @Test
    void getAllCategoryTypes() {
        List<CategoryType> categoryTypes = categoryTypeRepository.findAll();
        assertEquals(true, !categoryTypes.isEmpty());
    }

}
