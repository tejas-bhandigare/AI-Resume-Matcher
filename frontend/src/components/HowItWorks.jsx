function HowItWorks() {

  const steps = [
    "Upload Resume",
    "Paste Job Description",
    "AI Extracts Skills",
    "Resume Matching",
    "Interview Preparation"
  ];

  return (
    <div
      style={{
        marginTop: "20px",
      }}
    >
      <h3
        style={{
          marginBottom: "15px",
          color: "#374151",
        }}
      >
        How It Works?
      </h3>

      {steps.map((step, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "5px",
          }}
        >
          <div
            style={{
              width: "25px",
              height: "25px",
              borderRadius: "50%",
              background: "#7c3aed",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              marginRight: "15px",
            }}
          >
            {index + 1}
          </div>

          <span>{step}</span>
        </div>
      ))}
    </div>
  );
}

export default HowItWorks;