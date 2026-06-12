function Navbar() {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-purple-700">
        🤖 AI Resume Matcher
      </h1>

      <button className="bg-purple-600 text-white px-5 py-2 rounded-lg">
        Analyze
      </button>
    </nav>
  );
}

export default Navbar;