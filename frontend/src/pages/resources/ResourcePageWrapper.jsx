// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import ResourceCard from './ResourceCard';

export default function ResourcePageWrapper({ title, resources }) {
  return (
    <div className="min-h-screen px-6 py-14 bg-gradient-to-br from-[#f5f9ff] to-[#e3efff] text-gray-800">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12"
      >
        {title}
      </motion.h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {resources.map((res, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <ResourceCard {...res} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
