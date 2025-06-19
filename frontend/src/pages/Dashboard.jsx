import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaCode, FaUserTie, FaBook } from 'react-icons/fa';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-16 px-4">
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
      >
        🚀 Welcome to Your Dashboard
      </motion.h2>

      {/* Grid Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <DashboardButton
          icon={<FaCode size={28} className="text-cyan-400" />}
          title="Practice"
          description="Solve DSA and coding questions with structured progress."
          onClick={() => navigate('/practice')}
        />
        <DashboardButton
          icon={<FaUserTie size={28} className="text-green-400" />}
          title="Mock Interviews"
          description="Face AI-driven behavioral & technical mock interviews."
          onClick={() => navigate('/interviews')}
        />
        <DashboardButton
          icon={<FaBook size={28} className="text-purple-400" />}
          title="Resources"
          description="Explore curated prep sheets, tips, and revision tools."
          onClick={() => navigate('/resources')}
        />
      </div>
    </div>
  );
}

function DashboardButton({ icon, title, description, onClick }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6 cursor-pointer shadow-md hover:shadow-xl transition-all"
    >
      <div className="flex items-center gap-4 mb-3">
        <div className="p-2 rounded-full bg-white/10">{icon}</div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-sm text-gray-300">{description}</p>
    </motion.div>
  );
}
