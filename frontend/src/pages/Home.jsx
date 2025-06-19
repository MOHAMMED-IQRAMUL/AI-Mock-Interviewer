import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaRobot, FaLaptopCode, FaComments } from "react-icons/fa";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white overflow-hidden">
      {/* Floating Gradient Bubbles for Decor */}
      <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-purple-600 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute top-10 right-10 w-[200px] h-[200px] bg-blue-500 rounded-full blur-2xl opacity-20"></div>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center px-4 py-24 space-y-8 text-center z-10 relative">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Your AI Interview Buddy
        </motion.h1>

        <motion.p
          className="max-w-2xl text-gray-300 text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Crack your dream job with AI-powered mock interviews, live coding practice, and instant smart feedback — all in one platform.
        </motion.p>

        <motion.button
          onClick={() => navigate("/dashboard")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transition"
        >
          🚀 Start Practicing
        </motion.button>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-10 z-10 relative">
        <FeatureCard
          icon={<FaRobot size={28} className="text-purple-400" />}
          title="AI-Powered Interviews"
          description="Simulate real-time interviews with smart, human-like question flow."
        />
        <FeatureCard
          icon={<FaLaptopCode size={28} className="text-cyan-400" />}
          title="Live Coding Challenges"
          description="Practice with LeetCode-style problems and get real-time hints."
        />
        <FeatureCard
          icon={<FaComments size={28} className="text-green-400" />}
          title="Instant Smart Feedback"
          description="Understand your strengths & weaknesses with detailed insights."
        />
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md shadow-lg hover:shadow-xl transition"
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-3 bg-white/10 rounded-full">{icon}</div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </motion.div>
  );
}
