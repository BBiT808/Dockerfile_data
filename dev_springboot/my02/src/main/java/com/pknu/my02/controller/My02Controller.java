package com.pknu.my02.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

// import org.springframework.ui.Model;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class My02Controller {
    @GetMapping("/api")
    public String Api(Model model) {
        model.addAttribute("name");
        model.addAttribute("password");
        return "index";
    }

    // @PostMapping("/data")
    // @ResponseBody
    // public Map<String, String> Pdata(@RequestParam String username, @RequestParam
    // String password) {
    // System.out.println("아이디 :" + username + "/ 비번 :" + password);
    // Map<String, String> result = new HashMap<>();
    // result.put("username", username);
    // result.put("password", password);
    // return result;
    // }
}
