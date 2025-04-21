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
      e.preventDefault();
      askTutor();
    }
  };

  return (
    <div className=" bg-gradient-to-br  flex items-center justify-center px-6 py-10 mt-24">
      <div className="w-full max-w-4xl bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-gray-200 relative">
        {/* Decorative Gradient Border */}
        <div className="absolute inset-0 z-[-1] rounded-3xl border-4 border-transparent bg-clip-padding bg-gradient-to-br from-blue-300 via-purple-200 to-pink-200"></div>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-blue-700 hover:text-blue-900 font-medium transition duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </button>

        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-800 tracking-tight">
          AI Tutor for Artisans
        </h2>

        {/* Input Field */}
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask your question here..."
          rows="4"
          className="w-full p-5 border border-gray-300 rounded-2xl shadow-inner bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-gray-800"
        />

        {/* Instructions and Ask Button */}
        <div className="mt-5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-3 md:mb-0">
            Press Enter to ask (Shift + Enter for new line)
          </p>
          <button
            onClick={askTutor}
            className="bg-gradient-to-r from-blue-600 to-purple-700 hover:scale-105 hover:shadow-xl transition-transform duration-300 text-white font-semibold py-2 px-6 rounded-full"
          >
            Ask
          </button>
        </div>

        {/* Response Section */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            Response:
          </h3>
          <div className="bg-gray-100 p-5 rounded-2xl border border-gray-200 text-gray-800 whitespace-pre-wrap max-h-64 overflow-y-auto custom-scrollbar">
            {response}
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style>
        {`
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #a0aec0;
            border-radius: 4px;
          }
        `}
      </style>
    </div>
  );
};

export default AITutor;
