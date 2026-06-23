function SkillsAnalysis({ response }) {

  const strengths =
    response?.strengths || [];

  const missingSkills =
    response?.missingSkills || [];

  const suggestions =
    response?.suggestions || [];
 

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
      <h2
        style={{
          marginBottom: "20px",
          color: "#374151",
        }}
      >
        Skills Analysis
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "20px",
        }}
      >
        {/* Strengths */}

        <div>
          <h3
            style={{
              color: "#16a34a",
              marginBottom: "15px",
            }}
          >
            Strengths
          </h3>

          {strengths.map((item, index) => (
            <p
              key={index}
              style={{
                marginBottom: "10px",
              }}
            >
              ✅ {item}
            </p>
          ))}
        </div>

        {/* Missing Skills */}

        <div>
          <h3
            style={{
              color: "#dc2626",
              marginBottom: "15px",
            }}
          >
            Missing Skills
          </h3>

          {missingSkills.map((item, index) => (
            <p
              key={index}
              style={{
                marginBottom: "10px",
              }}
            >
              ❌ {item}
            </p>
          ))}
        </div>

        {/* Suggestions */}

        <div>
          <h3
            style={{
              color: "#2563eb",
              marginBottom: "15px",
            }}
          >
            Top Suggestions
          </h3>

          {suggestions.map((item, index) => (
            <p
              key={index}
              style={{
                marginBottom: "10px",
              }}
            >
              💡 {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsAnalysis;