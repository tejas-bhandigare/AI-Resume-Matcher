function MissingSkillsCard() {
  const skills = [
    "Docker",
    "AWS",
    "Kubernetes"
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
          color: "#ea580c",
          marginBottom: "15px",
        }}
      >
        Missing Skills
      </h3>

      {skills.map((item, index) => (
        <p key={index}>
          ❌ {item}
        </p>
      ))}
    </div>
  );
}

export default MissingSkillsCard;