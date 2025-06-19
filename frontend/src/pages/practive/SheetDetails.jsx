// pages/SheetDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ExternalLink, CheckCircle, Repeat } from "lucide-react";
import sheetsTopics from "../../data/sheetsTopics.json";

export default function SheetDetails() {
  const { sheetId } = useParams();
  const sheet = sheetsTopics[sheetId] || [];

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#1f1f2e] to-[#12121c] p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-3xl font-bold text-white mb-6 capitalize"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {sheetId} Sheet
      </motion.h1>

      <div className="max-w-4xl mx-auto space-y-5">
        {sheet.map((topic, index) => (
          <motion.div
            key={index}
            className="bg-white/5 hover:bg-white/10 rounded-2xl backdrop-blur-md border border-white/10 p-5 shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold text-white">{topic.name}</h2>
                <p className="text-gray-400 text-sm">Difficulty: {topic.difficulty}</p>
              </div>
              <div className="flex gap-4 items-center">
                {topic.links.leetcode && (
                  <a
                    href={topic.links.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-cyan-300 hover:text-white"
                  >
                    LeetCode <ExternalLink size={16} className="ml-1" />
                  </a>
                )}
                {topic.links.gfg && (
                  <a
                    href={topic.links.gfg}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-green-300 hover:text-white"
                  >
                    GFG <ExternalLink size={16} className="ml-1" />
                  </a>
                )}
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700"
              >
                <CheckCircle /> Mark Done
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-yellow-600 text-white hover:bg-yellow-700"
              >
                <Repeat /> Revise
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
