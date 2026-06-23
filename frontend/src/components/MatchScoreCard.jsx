function MatchScoreCard() {
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
      <h3>Match Score</h3>

      <h1
        style={{
          color: "#22c55e",
          fontSize: "42px",
          marginTop: "10px",
        }}
      >
        82%
      </h1>

      <p>Good Match</p>
    </div>
  );
}

export default MatchScoreCard;