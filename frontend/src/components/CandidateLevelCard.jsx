function CandidateLevelCard() {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "15px",
        padding: "20px",
        textAlign: "center",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h3>Candidate Level</h3>

      <h2
        style={{
          color: "#2563eb",
          marginTop: "15px",
        }}
      >
        Junior
      </h2>

      <p>Java Developer</p>
    </div>
  );
}

export default CandidateLevelCard;