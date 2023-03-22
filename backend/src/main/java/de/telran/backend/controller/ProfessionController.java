package de.telran.backend.controller;

import de.telran.backend.entity.Profession;
import de.telran.backend.repository.ProfessionRepository;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.websocket.server.PathParam;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/profession")
@CrossOrigin
@Tag(name = "Profession controller", description = "Manage REST API endpoints for profession")
public class ProfessionController {
    private static final Logger log = LoggerFactory.getLogger(VideoController.class);

    @Autowired
    private ProfessionRepository professionRepository;


    @GetMapping("")
    public List<Profession> getAllProfession() {
        List<Profession> allProfession = new ArrayList<>();
        professionRepository.findAll().forEach(allProfession::add);
        log.info(allProfession.toString());
        return allProfession;
    }



}
