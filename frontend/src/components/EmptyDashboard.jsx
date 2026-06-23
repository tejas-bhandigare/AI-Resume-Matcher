import {
  FaBullseye,
  FaChartLine,
  FaComments,
  FaLightbulb,
} from "react-icons/fa";

function EmptyDashboard() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px 20px",
      }}
    >
      <div
        style={{
          fontSize: "80px",
          marginBottom: "20px",
        }}
      >
        🤖
      </div>

      <h1
        style={{
          color: "#6d28d9",
          marginBottom: "10px",
        }}
      >
        AI Resume Matcher Ready
      </h1>

      <p
        style={{
          color: "#6b7280",
          fontSize: "18px",
          marginBottom: "40px",
        }}
      >
        Upload your resume and job description to get
        AI-powered ATS analysis.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          }}
        >
          <div style={{ fontSize: "40px" }}>🎯</div>
          <h3>Match Score</h3>
          <p style={{ color: "#6b7280" }}>
            Get ATS compatibility score
          </p>
        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          }}
        >
          <div style={{ fontSize: "40px" }}>📊</div>
          <h3>Skill Gap Analysis</h3>
          <p style={{ color: "#6b7280" }}>
            Find missing skills
          </p>
        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          }}
        >
          <div style={{ fontSize: "40px" }}>💬</div>
          <h3>Interview Questions</h3>
          <p style={{ color: "#6b7280" }}>
            Personalized questions
          </p>
        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          }}
        >
          <div style={{ fontSize: "40px" }}>💡</div>
          <h3>Career Suggestions</h3>
          <p style={{ color: "#6b7280" }}>
            Improve your profile
          </p>
        </div>
      </div>

      {/* <div
        style={{
          border: "2px dashed #8b5cf6",
          borderRadius: "15px",
          padding: "25px",
          background: "#faf5ff",
        }}
      >
        <h2
          style={{
            color: "#6d28d9",
            marginBottom: "10px",
          }}
        >
          🚀 Let's Get Started
        </h2>

        <p
          style={{
            color: "#6b7280",
          }}
        >
          Upload your resume, paste the job description
          and click Analyze Resume to generate your
          ATS report.
        </p>
      </div> */}
    </div>
  );
}

export default EmptyDashboard;









// function EmptyDashboard() {
//   return (
//     <div
//       style={{
//         textAlign: "center",
//         padding: "100px 20px",
//       }}
//     >
//       <h1>🤖 AI Resume Matcher</h1>

//       <p>
//         Upload your resume and job description
//         to get ATS analysis.
//       </p>

//       <div>
//         ✓ Match Score
//       </div>

//       <div>
//         ✓ Skill Gap Analysis
//       </div>

//       <div>
//         ✓ Interview Questions
//       </div>

//       <div>
//         ✓ Career Suggestions
//       </div>
//     </div>
//   );
// }   export default EmptyDashboard;