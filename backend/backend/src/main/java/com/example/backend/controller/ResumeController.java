package com.example.backend.controller;

import com.example.backend.service.JobDescriptionAgent;
import com.example.backend.service.MatchingAgent;
import com.example.backend.service.ResumeAgent;
import com.example.backend.service.ResumeParserService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/resume")
@CrossOrigin(
    origins = {
        "http://localhost:5173",
        "https://ai-resume-matcher-1-vqj6.onrender.com"
    }
)
public class ResumeController {

    private final ResumeParserService parserService;
    private final ResumeAgent resumeAgent;
    private final JobDescriptionAgent jobDescriptionAgent;
    private final MatchingAgent matchingAgent;

    public ResumeController(
            ResumeParserService parserService,
            ResumeAgent resumeAgent,
            JobDescriptionAgent jobDescriptionAgent,
            MatchingAgent matchingAgent) {

        this.parserService = parserService;
        this.resumeAgent = resumeAgent;
        this.jobDescriptionAgent = jobDescriptionAgent;
        this.matchingAgent = matchingAgent;
    }

    @PostMapping("/analyze")
    public String analyzeResume(
            @RequestParam("file") MultipartFile file,
            @RequestParam("jobDescription") String jobDescription) {

        // Step 1: Extract Resume Text
        String resumeText =
                parserService.extractText(file);

        // Step 2: Resume Agent Analysis
        String resumeAnalysis =
                resumeAgent.analyzeResume(resumeText);

        // Step 3: JD Agent Analysis
        String jdAnalysis =
                jobDescriptionAgent
                        .analyzeJobDescription(jobDescription);

        // Step 4: Matching Agent
        String finalResult =
                matchingAgent.matchResume(
                        resumeAnalysis,
                        jdAnalysis
                );

        return finalResult;
    }
} 