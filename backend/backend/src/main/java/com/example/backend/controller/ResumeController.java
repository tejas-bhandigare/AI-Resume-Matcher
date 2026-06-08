package com.example.backend.controller;


import com.example.backend.service.GroqService;
import com.example.backend.service.ResumeParserService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/resume")
@CrossOrigin(origins = "http://localhost:5173")
public class ResumeController {

    private final ResumeParserService parserService;
    private final GroqService groqService;

    public ResumeController(
            ResumeParserService parserService,
            GroqService groqService) {

        this.parserService = parserService;
       this.groqService = groqService;
    }

    @PostMapping("/analyze")
    public String analyzeResume(
            @RequestParam("file") MultipartFile file,
            @RequestParam("jobDescription") String jobDescription) {

        String resumeText =
                parserService.extractText(file);

        return  groqService.analyzeResume(
                resumeText,
                jobDescription
        );
    }
}



// package com.example.backend.controller;

// import com.example.backend.service.GeminiService;
// import com.example.backend.service.ResumeParserService;
// import org.springframework.web.bind.annotation.*;
// import org.springframework.web.multipart.MultipartFile;

// @RestController
// @RequestMapping("/api/resume")
// @CrossOrigin(origins = "http://localhost:5173")
// public class ResumeController {

//     private final ResumeParserService parserService;
//     private final GeminiService geminiService;

//     public ResumeController(ResumeParserService parserService
//         ,  GeminiService geminiService
//     ) {
//         this.parserService = parserService;
//          this.geminiService = geminiService;
//     }

//    @PostMapping("/upload")
// public String uploadResume(
//         @RequestParam("file") MultipartFile file) {

//     String resumeText =
//             parserService.extractText(file);

//     return geminiService.analyzeResume(resumeText);
// }
// }






// package com.example.backend.controller;

// import org.springframework.web.bind.annotation.*;
// import org.springframework.web.multipart.MultipartFile;

// @RestController
// @RequestMapping("/api/resume")
// @CrossOrigin(origins = "http://localhost:5173")
// public class ResumeController {


    
//     @PostMapping("/upload")
//     public String uploadResume(
//             @RequestParam("file") MultipartFile file) {

//         return "Received : " + file.getOriginalFilename();
//     }

    
// }