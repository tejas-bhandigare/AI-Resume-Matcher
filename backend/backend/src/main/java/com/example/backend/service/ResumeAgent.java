package com.example.backend.service;

import org.springframework.stereotype.Service;

@Service
public class ResumeAgent {

    private final GroqService groqService;

    public ResumeAgent(GroqService groqService) {
        this.groqService = groqService;
    }

    public String analyzeResume(String resumeText) {

        String prompt = """
                Analyze this resume.

                Extract:

                1. Technical Skills
                2. Projects
                3. Education
                4. Strengths

                Resume:

                %s
                """
                .formatted(resumeText);

        return groqService.askAI(prompt);
    }
}