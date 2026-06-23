import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

function AnalysisOverview({ response }) {

  const score = response?.matchScore || 0;

  const level =
    response?.candidateLevel || "N/A";

  const recommendation =
    response?.recommendation || "N/A";
  return (
    <div
      style={{
        background: "white",
        borderRadius: "15px",
        padding: "20px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        marginBottom: "20px",
      }}
    >
      {/* <h2
        style={{
          marginBottom: "20px",
          color: "#374151",
        }}
      >
        Analysis Overview
      </h2> */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "20px",
        }}
      >
        {/* Match Score */}

        {/* Match Score */}

        <div
          style={{
            textAlign: "center",
            padding: "20px",
            borderRadius: "10px",
            background: "#f8fafc",
          }}
        >
          <h3
            style={{
              color: "#6b7280",
              marginBottom: "15px",
            }}
          >
            Match Score
          </h3>

          <div
            style={{
              width: "120px",
              height: "120px",
              margin: "0 auto",
            }}
          >
            {/* <CircularProgressbar
      value={82}
      text="82%"
      styles={buildStyles({
        pathColor: "#16a34a",
        textColor: "#16a34a",
        trailColor: "#e5e7eb",
        textSize: "16px",
      })} */}

            <CircularProgressbar
              value={response?.matchScore || 0}
              text={`${response?.matchScore || 0}%`}
            />


          </div>

          <p
            style={{
              marginTop: "15px",
              fontWeight: "bold",
            }}
          >
            Good Match
          </p>
        </div>
        {/* Candidate Level */}

        <div
          style={{
            textAlign: "center",
            padding: "20px",
            borderRadius: "10px",
            background: "#f8fafc",
          }}
        >
          <h3
            style={{
              color: "#6b7280",
              marginBottom: "10px",
            }}
          >
            Candidate Level
          </h3>

          <h2
            style={{
              color: "#2563eb",
            }}
          >
            {/* Junior */}
            {/* {level} */}
            {response?.candidateLevel}
          </h2>

          <p>Java Developer</p>
        </div>

        {/* Recommendation */}

        <div
          style={{
            textAlign: "center",
            padding: "20px",
            borderRadius: "10px",
            background: "#f8fafc",
          }}
        >
          <h3
            style={{
              color: "#6b7280",
              marginBottom: "10px",
            }}
          >
            Recommendation
          </h3>

          <h2
            style={{
              color: "#16a34a",
            }}
          >
            {response?.recommendation}
          </h2>

          <p>Suitable for Interview</p>
        </div>
      </div>
    </div>
  );
}

export default AnalysisOverview;