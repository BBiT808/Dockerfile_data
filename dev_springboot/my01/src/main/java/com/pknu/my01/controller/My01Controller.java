package com.pknu.my01.controller;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.pknu.my01.dto.BungBbang;
import com.pknu.my01.dto.MemberData;

@Controller
public class My01Controller {
    @GetMapping("/")
    public String mainPage(Model model) {
        List<String> pageNames = List.of("model", "increase", "fragments", "if-unless", "DTO ex1", "DTO ex2",
                "GET_querystring", "GET_pathvariable", "POST_formdata", "final_chatbot");
        model.addAttribute("pages", pageNames);
        return "index"; // templates/index.html
    }

    @GetMapping("/model")
    public String ex01(Model model) {
        model.addAttribute("hello", "안녕하세요 ~~! 스프링부트 시작합니다.");
        model.addAttribute("name", "므니므니");
        model.addAttribute("age", 192039);
        return "ex01"; // templates/ex01.html
    }

    @GetMapping("/increase")
    public String ex02(Model model) {
        List<Integer> sampleNumbers = List.of(11, 22, 33, 44, 55, 66, 77);
        model.addAttribute("numbers", sampleNumbers);
        return "ex02"; // templates/ex02.html
    }

    @GetMapping("/fragments")
    public String ex03(Model model) {
        return "ex03"; // templates/ex03.html
    }

    @GetMapping("/if-unless")
    public String ex04(Model model) {

        model.addAttribute("isAdmin", true);
        model.addAttribute("who", "므니므니");
        List<String> itm = new ArrayList<>();
        itm.add("사과");
        itm.add("바나나");
        itm.add("체리");
        itm.add("수박");
        itm.add("망고");
        itm.add("키위");
        itm.add("포도");
        itm.add("참외");
        model.addAttribute("items", itm);
        return "ex04"; // templates/ex04.html
    }

    @GetMapping("/DTO ex1")
    public String ex05(Model model) {

        // MemberData member = new MemberData();

        MemberData member = new MemberData("므니므니", LocalDate.of(1997, 10, 31));
        MemberData smember = new MemberData("홍길동길동", LocalDate.of(1995, 7, 7));
        model.addAttribute("member", member);
        model.addAttribute("smember", smember);

        return "ex05"; // templates/ex05.html
    }

    @GetMapping("/DTO ex2")
    public String ex06(Model model) {

        // public BungBbang(String flavor, int price, LocalDate madeDate)

        List<BungBbang> bbangs = List.of(
                new BungBbang("팥붕어빵", 1000, LocalDate.of(2025, 6, 4)),
                new BungBbang("슈크림붕어빵", 1000, LocalDate.of(2025, 6, 4)),
                new BungBbang("초코붕어빵", 1000, LocalDate.of(2025, 6, 4)),
                new BungBbang("고구마붕어빵", 1000, LocalDate.of(2025, 6, 4)),
                new BungBbang("피자붕어빵", 1000, LocalDate.of(2025, 6, 4)));

        model.addAttribute("bbangs", bbangs);

        return "ex06"; // templates/ex06.html
    }

    @GetMapping("/GET_querystring")
    public String ex07(@RequestParam(required = false) String inName, String inAge,
            String inGen, String want, String allow, Model model) {
        System.out.println("이름 : " + inName);
        System.out.println("나이 : " + inAge);
        System.out.println("성별 : " + inGen);
        System.out.println("언어 : " + want);
        System.out.println("동의 : " + allow);

        List<String> content = List.of(
                "이름 : " + inName,
                "나이 : " + inAge,
                "성별 : " + inGen,
                "언어 : " + want,
                "동의 : " + allow);
        model.addAttribute("content", content);

        return "ex07"; // templates/ex07.html
    }

    @GetMapping({ "/GET_pathvariable", "/ex08/{name}", "/ex08/{name}/{age}" })
    public String ex08(@PathVariable(required = false) String name, @PathVariable(required = false) String age,
            Model model) {
        System.out.println("이름 : " + name + ", 나이 : " + age);
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "ex08"; // templates/ex08.html
    }

    @GetMapping("/POST_formdata")
    public String ex09() {
        return "ex09"; // templates/ex09.html
    }

    // 대괄호가 들어가면 경로 인식이 안 된대 !!!! 꼭 주의할 것
    @PostMapping("/POST_formdata")
    // public String ex09Post(@RequestParam(required = false, defaultValue = "익명")
    // String name,
    // @RequestParam(required = false, defaultValue = "20") String age,
    // Model model) {
    public String ex09Post(@RequestParam String name, @RequestParam String age, Model model) {
        // List<String> content = List.of("이름:" + name, "나이:" + age);
        // model.addAttribute("content", content);

        // System.out.println("이름 : " + name + ", 나이 : " + age);
        // model.addAttribute("name", name);
        // model.addAttribute("age", age);

        try {
            int parseAge = Integer.parseInt(age);
            model.addAttribute("name", name);
            model.addAttribute("age", parseAge);
        } catch (NumberFormatException e) {
            // age가 숫자가 아닌 경우 처리
            model.addAttribute("error", "나이는 숫자로 입력해 주세요 !");
        }

        return "ex09"; // templates/ex09.html
    }

    @GetMapping("/final_chatbot")
    public String ex10Chat(Model model) {
        return "ex10a";
    }
}

// 스프링 부트 > 타임리트 > html

// SPA

// (주체 ; 프레임워크 그 자체)프레임워크 : vuejs > 자기만의 문법 > html(마치 군대같이 딱딱한 .. 규칙이 난무하는)
// (주체 ; 자기)라이브러리 : React > jsx > html(자유도가 높다)

// >> 프레임워크와 라이브러리의 차이점 ??!!
