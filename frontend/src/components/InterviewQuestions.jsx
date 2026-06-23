function InterviewQuestions({ response }) {

  const questions =
    response?.interviewQuestions || [];

  

  const leftQuestions = questions.slice(0, 5);
  const rightQuestions = questions.slice(5, 10);

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
          color: "#2563eb",
          marginBottom: "20px",
        }}
      >
        Interview Questions
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
        }}
      >
        {/* Left Column */}

        <div>
          {leftQuestions.map((question, index) => (
            <p
              key={index}
              style={{
                marginBottom: "15px",
                lineHeight: "1.5",
              }}
            >
              <strong>{index + 1}.</strong> {question}
            </p>
          ))}
        </div>

        {/* Right Column */}

        <div>
          {rightQuestions.map((question, index) => (
            <p
              key={index}
              style={{
                marginBottom: "15px",
                lineHeight: "1.5",
              }}
            >
              <strong>{index + 6}.</strong> {question}
            </p>
          ))}
        </div>

      </div>
    </div>
  );
}

export default InterviewQuestions;