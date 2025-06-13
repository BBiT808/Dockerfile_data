package com.pknu.my01.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.pknu.my01.dto.ChatRequest;
import com.pknu.my01.service.OpenAiService;

@RestController
public class My02Controller {

    private final OpenAiService openAiService;

    public My02Controller(OpenAiService openAiService) {
        this.openAiService = openAiService;
    }

    @PostMapping("/final_chatbot")
    @ResponseBody
    public Map<String, String> chat(@RequestBody ChatRequest request) {
        System.out.println(request.getMessage());
        String message = request.getMessage();
        // String answer = message + "입니다.";
        // request.getMessage()
        String answer;
        if ("안녕".equals(message)) {
            answer = "🎤안녕이라고 내게 말하지 마 🎵🎶";
        } else if ("배고파".equals(message)) {
            answer = "🍚밥만 잘 먹더라~ 🍚";
        } else if ("잠 와".equals(message)) {
            answer = "😴어떡해 벌써 열 두 시 🕛";
        } else if ("그거야 ㅋㅋ".equals(message)) {
            answer = "🫡어 형이야 ㅋㅋ👍";
        } else {
            answer = openAiService.ask(message); // OpenAI 서비스 호출
            // openai()
            // answer = "🛸 어느 별에서 왔니 ? 내 맘💝 가지러 왔니 ? 👽";
        }

        return Map.of("reply", answer);
    }

}