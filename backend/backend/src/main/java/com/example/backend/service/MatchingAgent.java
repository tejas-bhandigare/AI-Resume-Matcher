package com.example.backend.service;

import org.springframework.stereotype.Service;

@Service
public class MatchingAgent {

    private final GroqService groqService;

    public MatchingAgent(GroqService groqService) {
        this.groqService = groqService;
    }

    public String matchResume(
            String resumeAnalysis,
            String jdAnalysis) {

        String prompt = """
                Compare the following:

                Resume Analysis:
                %s

                Job Description Analysis:
                %s

                Return:

                1. Match Score
                2. Missing Skills
                3. Strengths
                4. Suggestions
                """
                .formatted(
                        resumeAnalysis,
                        jdAnalysis
                );

        return groqService.askAI(prompt);
    }
}