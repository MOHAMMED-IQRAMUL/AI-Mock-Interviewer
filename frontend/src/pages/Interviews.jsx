import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import {     } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Interviews = () => {
  const navigate = useNavigate();
  const [interviewType, setInterviewType] = useState("technical");
  const [difficulty, setDifficulty] = useState("");
  const [topic, setTopic] = useState("");

  const handleSubmit = () => {
    const interviewData = {
      interviewType,
      difficulty,
      topic,
    };
    navigate("/interview/start", { state: interviewData });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-100 to-indigo-200 px-4">
      <motion.div
        className="w-full max-w-3xl bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-4xl font-extrabold mb-8 text-gray-800 text-center">
          🎯 Customize Your Interview
        </h2>

        {/* Interview Type */}
        <div className="mb-6">
          <label className="block font-medium text-lg mb-3 text-gray-700">
            Interview Type
          </label>
          <div className="flex gap-4">
            {["technical", "behavioral"].map((type) => (
              <button
                key={type}
                onClick={() => setInterviewType(type)}
                className={`px-6 py-2 rounded-full transition-all border text-sm font-semibold ${
                  interviewType === type
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty */}
        <div className="mb-6">
          <label className="block font-medium text-lg mb-3 text-gray-700">
            Difficulty
          </label>
          <div className="flex gap-4">
            {["Easy", "Medium", "Hard"].map((level) => (
              <button
                key={level}
                onClick={() => setDifficulty(level.toLowerCase())}
                className={`px-6 py-2 rounded-full transition-all border text-sm font-semibold ${
                  difficulty === level.toLowerCase()
                    ? "bg-green-600 text-white shadow-md"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Topic or Scenario */}
        <div className="mb-6">
          <label className="block font-medium text-lg mb-3 text-gray-700">
            {interviewType === "technical" ? "Select Topic" : "Select Scenario"}
          </label>
          <div className="relative">
            <select
              onChange={(e) => setTopic(e.target.value)}
              className="w-full bg-white/80 border border-gray-300 rounded-lg py-3 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300 appearance-none"
            >
              <option value="">Choose one</option>
              {interviewType === "technical" ? (
                <>
                  <option value="arrays">Arrays</option>
                  <option value="linkedlist">Linked List</option>
                  <option value="dp">Dynamic Programming</option>
                  <option value="graph">Graph</option>
                </>
              ) : (
                <>
                  <option value="teamwork">Teamwork</option>
                  <option value="conflict">Conflict Resolution</option>
                  <option value="leadership">Leadership</option>
                </>
              )}
            </select>
            <ChevronDown className="absolute right-4 top-3.5 text-gray-500 pointer-events-none" />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-right mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSubmit}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition-all"
          >
            🚀 Start Interview
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Interviews;
