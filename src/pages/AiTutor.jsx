import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AITutor = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const navigate = useNavigate();

  const askTutor = async () => {
    if (!query.trim()) return;

    setResponse("Thinking...");
    try {
      const res = await fetch("http://localhost:5001/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      const data = await res.json();
      setResponse(data.reply || data.error || "No response received.");
    } catch (err) {
      setResponse("Error connecting to server.");
      console.error(err);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // prevent newline
      askTutor();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          AI Tutor for Artisans
        </h2>
        <button
          className="text-3xl font-bold mb-6 text-gray-800 text-center"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your question here..."
          rows="4"
          className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
        <div className="mt-5 flex justify-between items-center">
          <p className="text-sm text-gray-500">
            Press Enter to ask (Shift+Enter for new line)
          </p>
          <button
            onClick={askTutor}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-2 px-6 rounded-full shadow-md transition-all"
          >
            Ask
          </button>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Response:
          </h3>
          <div className="bg-gray-50 p-4 border border-gray-200 rounded-xl text-gray-800 whitespace-pre-wrap max-h-60 overflow-y-auto">
            {response}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITutor;
