function RecommendationCard() {
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
      <h3>Recommendation</h3>

      <h2
        style={{
          color: "#16a34a",
          marginTop: "15px",
        }}
      >
        Recommended
      </h2>

      <p>Suitable for Interview</p>
    </div>
  );
}

export default RecommendationCard;