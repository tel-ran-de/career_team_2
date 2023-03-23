package de.telran.backend.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ForwardController {
    private static final Logger log = LoggerFactory.getLogger(VideoController.class);

    @RequestMapping("/")
    public String index() {
        log.info("Forward to index.html");
        return "index.html";
    }


}
