package com.pknu.my01.service;

import java.util.List;
import java.util.Map;

// import java.net.http.HttpHeaders;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class OpenAiService {

    @Value("${openai.api.key}")
    private String apiKey;

    public String ask(String prompt) {
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(apiKey);
        headers.setContentType(MediaType.APPLICATION_JSON);

        List<Map<String, Object>> messages = List.of(
                Map.of("role", "system", "content",
                        "너는 친절하게 대답하고, 이모티콘을 많이 쓰고, 논리적으로 말하며, 나에게 반말을 쓰면서 답해 줘."),
                Map.of("role", "user", "content", prompt));

        Map<String, Object> body = Map.of(
                "model", "gpt-4.1-nano", // gpt 모델 선정 !
                "messages", messages, // 메세지 입력!
                "temperature", 1.2, // 온도 0~2까지!! (대화말투의 강도)
                "max_tokens", 200, // 최대 토큰 수 (응답의 길이 제한) (1~4096)
                "presence_penalty", 0.6, // 새로운 주제에 대한 응답을 유도
                "frequency_penalty", 0.5 // 반복적인 내용의 응답을 줄임

        );
        HttpEntity<Map<String, Object>> request = new HttpEntity<>(body, headers); // 요청 구조화
        RestTemplate restTemplate = new RestTemplate(); // js의 fetch와 기능 유사 !!

        try {
            ResponseEntity<Map> response = restTemplate.exchange(
                    "https://api.openai.com/v1/chat/completions",
                    HttpMethod.POST,
                    request,
                    Map.class);
            List<Map<String, Object>> choices = (List<Map<String, Object>>) response.getBody().get("choices");
            Map<String, Object> message = (Map<String, Object>) choices.get(0).get("message");
            return (String) message.get("content"); // 응답의 내용 반환
        } catch (Exception e) {
            return "오류 발생 !! : " + e.getMessage(); // 오류 메시지 반환
        }
    }

}

// top_p : 확률질량 기반 필터링 ; 단어 선택의 확률이 증가 !!
// n : 응답의 개수 ; 여러 개의 응답을 생성(몇 개의 응답을 생성할까?)
// user : 사용자 ID ; 대화의 맥락을 유지하기 위해 사용
