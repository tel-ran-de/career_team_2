package de.telran.backend.controller;

import de.telran.backend.entity.SearchCategory;
import de.telran.backend.entity.Video;
import de.telran.backend.repository.CategoryRepository;
import de.telran.backend.repository.CategoryTypeRepository;
import de.telran.backend.repository.VideoRepository;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

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

    @PostMapping
    public List<Video> getAllVideo() {
        List<Video> all = new ArrayList<>();
        videoRepository.findAll().forEach(all::add);
        log.info(all.toString());
        return all;
    }

    @GetMapping("/category")
    public List<SearchCategory> getAllCategories(){
        List<SearchCategory> allCategories = new ArrayList<>();
        categoryRepository.allCategories().forEach(allCategories::add);
        log.info(allCategories.toString());
        return allCategories;
    }
    
}
