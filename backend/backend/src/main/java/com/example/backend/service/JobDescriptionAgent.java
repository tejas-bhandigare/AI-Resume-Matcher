package com.example.backend.service;

import org.springframework.stereotype.Service;

@Service
public class JobDescriptionAgent {

    private final GroqService groqService;

    public JobDescriptionAgent(GroqService groqService) {
        this.groqService = groqService;
    }

    public String analyzeJobDescription(String jobDescription) {

        String prompt = """
                Analyze this Job Description.

                Extract:

                1. Required Skills
                2. Preferred Skills
                3. Responsibilities
                4. Experience Requirements

                Job Description:

                %s
                """
                .formatted(jobDescription);

        return groqService.askAI(prompt);
    }
}