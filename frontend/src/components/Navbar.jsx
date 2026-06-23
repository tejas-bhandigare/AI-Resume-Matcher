function Navbar() {
  return (
    <div
      style={{
        background: "#ffffff",
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ color: "#6d28d9" }}>
        🤖 AI Resume Matcher
      </h1>

      <button
        style={{
          background: "#6d28d9",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "8px",
        }}
      >
        Analyze
      </button>
    </div>
  );
}

export default Navbar;










// function Navbar() {
//   return (
//     <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
//       <h1 className="text-2xl font-bold text-purple-700">
//         🤖 AI Resume Matcher
//       </h1>

//       <button className="bg-purple-600 text-white px-5 py-2 rounded-lg">
//         Analyze
//       </button>
//     </nav>
//   );
// }

// export default Navbar;