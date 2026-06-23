function SuggestionsCard() {
  const suggestions = [
    "Learn Docker",
    "Learn AWS",
    "Build Cloud Project"
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
          color: "#2563eb",
          marginBottom: "15px",
        }}
      >
        Suggestions
      </h3>

      {suggestions.map((item, index) => (
        <p key={index}>
          💡 {item}
        </p>
      ))}
    </div>
  );
}

export default SuggestionsCard;