package com.example.backend.dto;

import java.util.List;

public class ResumeAnalysisResponse {

    private int matchScore;

    private String candidateLevel;

    private String recommendation;

    private List<String> strengths;

    private List<String> missingSkills;

    private List<String> suggestions;

    private List<String> interviewQuestions;

    public ResumeAnalysisResponse() {
    }

    public int getMatchScore() {
        return matchScore;
    }

    public void setMatchScore(int matchScore) {
        this.matchScore = matchScore;
    }

    public String getCandidateLevel() {
        return candidateLevel;
    }

    public void setCandidateLevel(String candidateLevel) {
        this.candidateLevel = candidateLevel;
    }

    public String getRecommendation() {
        return recommendation;
    }

    public void setRecommendation(String recommendation) {
        this.recommendation = recommendation;
    }

    public List<String> getStrengths() {
        return strengths;
    }

    public void setStrengths(List<String> strengths) {
        this.strengths = strengths;
    }

    public List<String> getMissingSkills() {
        return missingSkills;
    }

    public void setMissingSkills(List<String> missingSkills) {
        this.missingSkills = missingSkills;
    }

    public List<String> getSuggestions() {
        return suggestions;
    }

    public void setSuggestions(List<String> suggestions) {
        this.suggestions = suggestions;
    }

    public List<String> getInterviewQuestions() {
        return interviewQuestions;
    }

    public void setInterviewQuestions(List<String> interviewQuestions) {
        this.interviewQuestions = interviewQuestions;
    }
}