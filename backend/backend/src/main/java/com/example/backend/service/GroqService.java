package com.example.backend.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;

@Service
public class GroqService {

    @Value("${groq.api.key}")
    private String apiKey;

    private final RestTemplate restTemplate =
            new RestTemplate();

    @SuppressWarnings("rawtypes")
    public String askAI(String prompt) {

        String url =
                "https://api.groq.com/openai/v1/chat/completions";

        HttpHeaders headers = new HttpHeaders();

        headers.setContentType(MediaType.APPLICATION_JSON);

        headers.setBearerAuth(apiKey);

        Map<String, Object> body = Map.of(
                "model", "llama-3.3-70b-versatile",
                "messages", List.of(
                        Map.of(
                                "role", "user",
                                "content", prompt
                        )
                )
        );

        HttpEntity<Map<String, Object>> entity =
                new HttpEntity<>(body, headers);

        try {

            ResponseEntity<Map> response =
                    restTemplate.exchange(
                            url,
                            HttpMethod.POST,
                            entity,
                            Map.class
                    );

            Map responseBody =
                    response.getBody();

            List choices =
                    (List) responseBody.get("choices");

            Map choice =
                    (Map) choices.get(0);

            Map message =
                    (Map) choice.get("message");

            return message.get("content").toString();

        } catch (Exception e) {

            return "Groq Error : "
                    + e.getMessage();
        }
    }
}