function StrengthCard() {
  const strengths = [
    "Java",
    "Spring Boot",
    "React",
    "REST APIs"
  ];

  return (
    <div
      style={{
        background: "white",
        borderRadius: "15px",
        padding: "20px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h3
        style={{
          color: "#16a34a",
          marginBottom: "15px",
        }}
      >
        Strengths
      </h3>

      {strengths.map((item, index) => (
        <p key={index}>
          ✅ {item}
        </p>
      ))}
    </div>
  );
}

export default StrengthCard;