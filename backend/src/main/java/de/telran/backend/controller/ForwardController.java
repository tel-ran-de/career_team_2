package de.telran.backend.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
/**
 * Class describes the controller that returns index.html
 * @author Ivan Zamula, Anna Etzler
 * @version 1.0
 */
@Controller
public class ForwardController {
    private static final Logger log = LoggerFactory.getLogger(VideoController.class);
    /**
     * Method  describes the controller that returns index.html
     * @author Ivan Zamula, Anna Etzler
     * @version 1.0
     * @return index.html
     */
    @RequestMapping("/")
    public String index() {
        log.info("Forward to index.html");
        return "index.html";
    }


}
