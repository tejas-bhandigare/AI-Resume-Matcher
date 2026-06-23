import { useState } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import UploadPanel from "./components/UploadPanel";
import Dashboard from "./components/Dashboard";

function App() {
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [response, setResponse] = useState(null);

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
      await axios.post(
  "https://ai-resume-matcher-1-vqj6.onrender.com/api/resume/analyze",
  formData
);

      // setResponse(JSON.parse(res.data));
      console.log("Response:");
console.log(res.data);
console.log(typeof res.data);

const cleanedJson = res.data
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

setResponse(JSON.parse(cleanedJson));
    } catch (error) {
  console.log("FULL ERROR");
  console.log(error);

  if (error.response) {
    console.log("Response Data:");
    console.log(error.response.data);
  }

  alert("Error analyzing resume");
}
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
      }}
    >
      <Navbar />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "350px 1fr",
          gap: "20px",
          padding: "20px",
        }}
      >
        <UploadPanel
          file={file}
          setFile={setFile}
          jobDescription={jobDescription}
          setJobDescription={setJobDescription}
          handleAnalyze={handleAnalyze}
        />

        <Dashboard response={response} />
      </div>
    </div>
  );
}

export default App;











// import { useState } from "react";
// import axios from "axios";

// function App() {
//   const [file, setFile] = useState(null);
//   const [jobDescription, setJobDescription] = useState("");
//   const [response, setResponse] = useState("");

//   const handleAnalyze = async () => {
//     if (!file) {
//       alert("Please select a resume");
//       return;
//     }

//     if (!jobDescription.trim()) {
//       alert("Please enter a job description");
//       return;
//     }

//     const formData = new FormData();

//     formData.append("file", file);
//     formData.append("jobDescription", jobDescription);

//     try {
//       const res = await axios.post(
//         "http://localhost:8080/api/resume/analyze",
//         formData
//       );

//       setResponse(res.data);
//     } catch (error) {
//       console.error(error);
//       alert("Error analyzing resume");
//     }
//   };

//   return (
    
//  <div
//   style={{
//     width: "100%",
//     minHeight: "100vh",
//       backgroundColor: "#f3f4f6",
//       fontFamily: "Arial, sans-serif",
//     }}
//   >
//     {/* Navbar */}
//     <div
//       style={{
//         background: "#ffffff",
//         padding: "10px 40px",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
//       }}
//     >
//       <h1 style={{ color: "#6d28d9" }}>
//         🤖 AI Resume Matcher
//       </h1>

//       <button
//         style={{
//           background: "#6d28d9",
//           color: "white",
//           border: "none",
//           padding: "10px 20px",
//           borderRadius: "8px",
//         }}
//       >
//         Analyze
//       </button>
//     </div>

//     {/* Main Layout */}
//     <div
//       style={{
//         display: "grid",
//         // gridTemplateColumns: "30% 70%",
//         gridTemplateColumns: "350px 1fr",
//         gap: "20px",
//         padding: "20px",
//       }}
//     >
//       {/* Left Panel */}
//       <div
//         style={{
//           background: "white",
//           padding: "20px",
//           borderRadius: "15px",
//           boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
//         }}
//       >
//         <h2>Upload Resume</h2>

//         <input
//           type="file"
//           accept=".pdf"
//           onChange={(e) => setFile(e.target.files[0])}
//         />

//         <br />
//         <br />

//         <h2>Job Description</h2>

//         <textarea
//           rows="12"
//           placeholder="Paste Job Description Here..."
//           value={jobDescription}
//           onChange={(e) => setJobDescription(e.target.value)}
//           style={{
//             width: "100%",
//             padding: "10px",
//             borderRadius: "10px",
//           }}
//         />

//         <br />
//         <br />

//         <button
//           onClick={handleAnalyze}
//           style={{
//             width: "100%",
//             background: "#6d28d9",
//             color: "white",
//             border: "none",
//             padding: "12px",
//             borderRadius: "10px",
//             cursor: "pointer",
//           }}
//         >
//           Analyze Resume
//         </button>
//       </div>

//       {/* Dashboard */}
//       <div
//         style={{
//           background: "white",
//           padding: "20px",
//           borderRadius: "15px",
//           boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
//         }}
//       >
//         <h2>Analysis Dashboard</h2>

//         <div
//           style={{
//             minHeight: "500px",
//             border: "2px dashed #d1d5db",
//             borderRadius: "10px",
//             padding: "20px",
//             marginTop: "20px",
//           }}
//         >
//           {response ? (
//             <pre
//               style={{
//                 whiteSpace: "pre-wrap",
//               }}
//             >
//               {response}
//             </pre>
//           ) : (
//             <p
//               style={{
//                 color: "#6b7280",
//                 textAlign: "center",
//                 marginTop: "200px",
//               }}
//             >
//               Analysis Results Will Appear Here
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   </div>
// );
// }
// export default App;