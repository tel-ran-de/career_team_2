package de.telran.backend.controller;

import de.telran.backend.entity.Category;
import de.telran.backend.entity.CategoryType;
import de.telran.backend.entity.Profession;
import de.telran.backend.entity.Video;
import de.telran.backend.repository.CategoryRepository;
import de.telran.backend.repository.CategoryTypeRepository;
import de.telran.backend.repository.ProfessionRepository;
import de.telran.backend.repository.VideoRepository;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

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
    public List<Video> listAllVideo(
            @RequestParam(value = "search", defaultValue = "") String search,
            @RequestBody List<Long> filters
//            (@RequestBody String body, Writer writer) throws IOException
    ) {
        log.info(search);
        log.info(filters.toString());
        List<Video> all = new ArrayList<>();
        videoRepository.findByNameContaining(search).forEach(all::add);
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
