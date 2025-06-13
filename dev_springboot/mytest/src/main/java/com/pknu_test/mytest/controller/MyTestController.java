package com.pknu_test.mytest.controller;

import java.util.HashMap;
import java.util.Map;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class MyTestController {

    @GetMapping("/api")
    @ResponseBody
    public Map<String, String> Api() {
        Map<String, String> data = new HashMap<>();
        data.put("who", "data를 담아서 날립니다 !");
        System.out.println("요청으로 인해 데이터를 전송합니다 !");
        return data;
    }

    @GetMapping("/list")
    @ResponseBody
    public Map<String, String> Lists() {
        Map<String, String> data = new HashMap<>();
        data.put("list", "list를 담아서 날립니다 !");
        System.out.println("요청으로 인해 리스트를 전송합니다 !");
        return data;
    }

    @PostMapping("/data")
    @ResponseBody
    public Map<String, String> ReceiveData(@RequestBody Map<String, String> payload) {
        String name = payload.get("name");
        String ageStr = payload.get("age");
        String memo = payload.get("memo");

        // 문자열 age를 정수형으로 변환!
        int age = 0;
        try {
            age = Integer.parseInt(ageStr);
        } catch (NumberFormatException e) {
            System.out.println("숫자로 인식할 수 없습니다 😵 -> " + ageStr);
        }

        System.out.println("이름 : " + name + "/ 나이 : " + age + "/ 메모 : " + memo);

        Map<String, String> result = new HashMap<>();
        result.put("whonm", name + "님");
        result.put("whoag", (age + 1) + "살!");
        result.put("whomm", memo + "라고 잘 받았습니다~");

        return result;
    }

}
