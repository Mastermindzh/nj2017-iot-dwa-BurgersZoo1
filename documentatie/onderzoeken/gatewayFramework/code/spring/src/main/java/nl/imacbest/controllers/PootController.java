package nl.imacbest.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class PootController {

    @GetMapping("/")
    @ResponseBody
    public String home(){
        return "Test";
    }
}
