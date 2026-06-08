AI Resume Matcher

AI Resume Matcher is a full-stack AI-powered application that analyzes a candidate's resume against a job description and provides ATS-style feedback. The application extracts text from uploaded PDF resumes, compares it with job requirements using AI, and generates insights such as match score, strengths, missing skills, improvement suggestions, and interview questions.

Features

* Upload resumes in PDF format
* Paste job descriptions from job portals
* Extract resume content using Apache PDFBox
* AI-powered resume and job description comparison
* Match score generation
* Missing skill identification
* Resume improvement suggestions
* Interview question generation

Tech Stack

Frontend

* React.js
* Axios
* HTML
* CSS

Backend

* Java 21
* Spring Boot
* Maven
* REST APIs

AI Integration

* Groq API
* Llama 3.3 70B Versatile

Tools & Libraries

* Apache PDFBox
* Postman
* Git
* GitHub

How It Works

1. Upload a resume in PDF format.
2. Paste the target job description.
3. The backend extracts resume content using PDFBox.
4. Resume content and job description are sent to the AI model.
5. The AI evaluates the resume against the job requirements.
6. The system returns:

   * Match Score
   * Strengths
   * Missing Skills
   * Resume Improvement Suggestions
   * Interview Questions

API Endpoint

POST /api/resume/analyze

Request Parameters

file
Resume PDF file

jobDescription
Target job description text

Sample Output

Match Score: 85%

Strengths

* Java
* Spring Boot
* REST APIs

Missing Skills

* Docker
* AWS

Suggestions

* Add cloud-based projects
* Include measurable achievements
* Improve project descriptions

Interview Questions

* Explain Dependency Injection in Spring.
* What is Spring Boot Auto Configuration?
* How do REST APIs work?

Project Structure

Frontend (React)
↓
REST API Calls
↓
Spring Boot Backend
↓
Resume Parser Service
↓
Groq AI Service
↓
Analysis Result

Future Enhancements

* Multi-Agent Architecture
* Authentication and User Profiles
* Resume Analysis History
* Downloadable Reports
* Learning Roadmap Generation
* Skill Gap Dashboard
* Interview Preparation Module

Developer

Tejas Bhandigare

MCA Student | Java Developer | Spring Boot Developer | AI Enthusiast
