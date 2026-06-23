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

        Return ONLY valid JSON.

        {
          "matchScore": 0,
          "candidateLevel": "",
          "recommendation": "",
          "strengths": [],
          "missingSkills": [],
          "suggestions": [],
          "interviewQuestions": []
        }

        Rules:
        - matchScore should be integer between 0 and 100.
        - candidateLevel should be Fresher, Junior, Mid-Level or Senior.
        - recommendation should be Recommended, Partially Recommended or Not Recommended.
        - strengths must be array of strings.
        - missingSkills must be array of strings.
        - suggestions must be array of strings.
        - interviewQuestions must contain exactly 10 questions.
        - Return ONLY JSON.
        - Do not add explanation.
        """
        .formatted(
                resumeAnalysis,
                jdAnalysis
        );
        // String prompt = """
        //         Compare the following:

        //         Resume Analysis:
        //         %s

        //         Job Description Analysis:
        //         %s

        //         Return:

        //         1. Match Score
        //         2. Missing Skills
        //         3. Strengths
        //         4. Suggestions
        //         """
        //         .formatted(
        //                 resumeAnalysis,
        //                 jdAnalysis
        //         );

        return groqService.askAI(prompt);
    }
}