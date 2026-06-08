import { useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [response, setResponse] = useState("");

  const handleAnalyze = async () => {
    if (!file) {
      alert("Please select a resume");
      return;
    }

    if (!jobDescription.trim()) {
      alert("Please enter a job description");
      return;
    }

    const formData = new FormData();

    formData.append("file", file);
    formData.append("jobDescription", jobDescription);

    try {
      const res = await axios.post(
        "http://localhost:8080/api/resume/analyze",
        formData
      );

      setResponse(res.data);
    } catch (error) {
      console.error(error);
      alert("Error analyzing resume");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>AI Resume Matcher</h1>

      <h3>Upload Resume</h3>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br />
      <br />

      <h3>Paste Job Description</h3>

      <textarea
        rows="12"
        cols="80"
        placeholder="Paste Job Description Here..."
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleAnalyze}>
        Analyze Resume
      </button>

      <br />
      <br />

      <h2>Analysis Result</h2>

      <pre
        style={{
          whiteSpace: "pre-wrap",
          border: "1px solid #ccc",
          padding: "10px",
        }}
      >
        {response}
      </pre>
    </div>
  );
}

export default App;