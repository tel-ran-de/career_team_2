package de.telran.backend.controller;

import com.google.gson.Gson;
import de.telran.backend.utils.Body;
import de.telran.backend.entity.Category;
import de.telran.backend.entity.CategoryType;
import de.telran.backend.entity.Video;
import de.telran.backend.repository.CategoryRepository;
import de.telran.backend.repository.CategoryTypeRepository;
import de.telran.backend.repository.VideoRepository;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@CrossOrigin
@Tag(name = "Video controller", description = "Manage REST API endpoints for video")
public class VideoController {
    private static final Logger log = LoggerFactory.getLogger(VideoController.class);

    @Autowired
    private VideoRepository videoRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private CategoryTypeRepository categoryTypeRepository;


    @GetMapping("/video")
    public List<Video> getAllVideo() {
        List<Video> all = new ArrayList<>();
        videoRepository.findAll().forEach(all::add);
        log.info(all.toString());
        return all;
    }

    @PostMapping("/video")
    public List<Video> listAllVideo(@RequestBody String body)
    {
        log.info(body);
        Gson gson = new Gson();
        Body bodyJson = gson.fromJson(body, Body.class);

        List<Video> all = new ArrayList<>();
        String search = bodyJson.search;
        if (search.equals("")){
            all = videoRepository.findAll();
        }
        else {
            all = videoRepository.findByNameContaining(search);
        }
        if (bodyJson.filters.length != 0){
            if (search.equals("")){
                all = new ArrayList<>();
            }
            Set<Long> setFilters = new HashSet<Long>(Arrays.asList(bodyJson.filters));
            List<Video> videoByFilters = videoRepository.findVideoIdByCategoryIds(setFilters);

            for (Video video : videoByFilters) {

                if (!all.contains(video)) {
                    all.add(video);
                }
            }
        }

        log.info(all.toString());
        return all;
    }

    @GetMapping("/category")
    public List<Category> getAllCategories(){
        List<Category> allCategories = new ArrayList<>();
        categoryRepository.findAll().forEach(allCategories::add);
        log.info(allCategories.toString());
        return allCategories;
    }


    @GetMapping("/category_types")
    public List<CategoryType> getAllCategoryTypes(){
        List<CategoryType> allCategoryTypes = new ArrayList<>();
        categoryTypeRepository.findAll().forEach(allCategoryTypes::add);
        log.info(allCategoryTypes.toString());
        return allCategoryTypes;
    }
}
