import HowItWorks from "./HowItWorks";

function UploadPanel({
  file,
  setFile,
  jobDescription,
  setJobDescription,
  handleAnalyze,
}) {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2>Upload Resume</h2>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br />
      <br />

      <h2>Job Description</h2>

      <textarea
        rows="12"
        placeholder="Paste Job Description Here..."
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "10px",
        }}
      />

      <br />
      <br />

      <button
        onClick={handleAnalyze}
        style={{
          width: "100%",
          background: "#6d28d9",
          color: "white",
          border: "none",
          padding: "12px",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        Analyze Resume
      </button>
      <HowItWorks />
    </div>
  );
}

export default UploadPanel;






// import { useState } from "react";

// function UploadPanel() {
//   const [jobDescription, setJobDescription] = useState("");

//   return (
//     <div className="bg-white shadow-md rounded-xl p-6">

//       <h2 className="text-xl font-bold mb-4">
//         Upload Resume
//       </h2>

//       <input
//         type="file"
//         className="mb-4"
//       />

//       <h2 className="text-xl font-bold mb-3">
//         Job Description
//       </h2>

//       <textarea
//         rows="10"
//         value={jobDescription}
//         onChange={(e) =>
//           setJobDescription(e.target.value)
//         }
//         className="w-full border rounded-lg p-3"
//         placeholder="Paste Job Description..."
//       />

//       <button
//         className="w-full mt-4 bg-purple-600 text-white py-3 rounded-lg"
//       >
//         Analyze Resume
//       </button>
//     </div>
//   );
// }

// export default UploadPanel;