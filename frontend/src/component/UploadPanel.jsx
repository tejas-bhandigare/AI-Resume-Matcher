import { useState } from "react";

function UploadPanel() {
  const [jobDescription, setJobDescription] = useState("");

  return (
    <div className="bg-white shadow-md rounded-xl p-6">

      <h2 className="text-xl font-bold mb-4">
        Upload Resume
      </h2>

      <input
        type="file"
        className="mb-4"
      />

      <h2 className="text-xl font-bold mb-3">
        Job Description
      </h2>

      <textarea
        rows="10"
        value={jobDescription}
        onChange={(e) =>
          setJobDescription(e.target.value)
        }
        className="w-full border rounded-lg p-3"
        placeholder="Paste Job Description..."
      />

      <button
        className="w-full mt-4 bg-purple-600 text-white py-3 rounded-lg"
      >
        Analyze Resume
      </button>
    </div>
  );
}

export default UploadPanel;