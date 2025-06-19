import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { BookOpen, ListTodo, Flame } from "lucide-react";
import sheets from "../data/sheets.json";

export default function Practice() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#1f1f2e] to-[#12121c] p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-4xl text-white font-bold mb-10 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        🧠 Practice Sheets
      </motion.h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sheets.map((sheet, index) => (
          <motion.div
            key={sheet.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              to={`/practice/${sheet.id}`}
              className="group relative flex flex-col justify-between bg-[#1f1f2e] hover:bg-[#28283a] border border-white/10 rounded-xl p-6 shadow-md hover:shadow-lg transition-transform transform hover:scale-[1.01] duration-200 ease-in-out h-full"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="text-cyan-400 group-hover:text-white transition" size={20} />
                  <h2 className="text-xl font-semibold text-white truncate">{sheet.title}</h2>
                </div>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                  {sheet.description}
                </p>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-400 mt-auto">
                <span className="flex items-center gap-1">
                  <ListTodo size={16} />
                  {sheet.totalTopics} Topics
                </span>
                <span className="flex items-center gap-1">
                  <Flame size={16} />
                  {sheet.difficulty}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
