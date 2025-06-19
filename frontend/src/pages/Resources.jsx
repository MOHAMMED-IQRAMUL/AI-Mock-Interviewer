// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaCode, FaUserTie, FaBrain, FaLaptopCode, FaClipboardList, FaProjectDiagram, FaGlobe, FaTools } from 'react-icons/fa';

const resources = [
  {
    icon: <FaCode size={24} className="text-cyan-400" />,
    title: 'DSA & Coding',
    desc: 'Practice data structures and algorithms from beginner to advanced level.',
    link: '/resources/dsa'
  },
  {
    icon: <FaLaptopCode size={24} className="text-green-400" />,
    title: 'Core CS Subjects',
    desc: 'Revise OS, DBMS, CN, OOPs and core fundamentals easily.',
    link: '/resources/core'
  },
  {
    icon: <FaUserTie size={24} className="text-purple-400" />,
    title: 'HR Questions',
    desc: 'Prepare for common HR interview questions and frame your answers smartly.',
    link: '/resources/hr'
  },
  {
    icon: <FaBrain size={24} className="text-pink-400" />,
    title: 'Non-Tech Round',
    desc: 'Master aptitude, communication and general reasoning rounds.',
    link: '/resources/nontech'
  },
  {
    icon: <FaClipboardList size={24} className="text-yellow-400" />,
    title: 'Top Interview Sheets',
    desc: 'Access curated question sheets like SDE Sheet, Striver A2Z, Love Babbar.',
    link: '/resources/sheets'
  },
  {
    icon: <FaProjectDiagram size={24} className="text-orange-400" />,
    title: 'Project Ideas',
    desc: 'Explore major/minor project ideas with resources and GitHub links.',
    link: '/resources/projects'
  },
  {
    icon: <FaGlobe size={24} className="text-blue-400" />,
    title: 'Web Dev Roadmap',
    desc: 'Step-by-step guide for frontend/backend/web3 and MERN development.',
    link: '/resources/webdev'
  },
  {
    icon: <FaTools size={24} className="text-indigo-400" />,
    title: 'Resume & Portfolio',
    desc: 'Create ATS-friendly resumes and stunning personal portfolios.',
    link: '/resources/resume'
  },
];

export default function Resources() {
  return (
    <div className="min-h-screen px-4 py-16 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
      >
        📚 Ultimate Interview Resource Hub
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {resources.map((res, index) => (
          <motion.a
            key={index}
            href={res.link}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-md hover:shadow-xl transition-all flex flex-col gap-3"
          >
            <div className="flex items-center gap-3">
              {res.icon}
              <h3 className="text-lg font-semibold text-white">{res.title}</h3>
            </div>
            <p className="text-sm text-gray-300">{res.desc}</p>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
