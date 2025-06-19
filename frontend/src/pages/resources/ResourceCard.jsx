import { FaVideo, FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa';

export default function ResourceCard({ title, description, tags, url, type }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-md hover:shadow-xl transition-all flex flex-col justify-between h-full">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        {type === "video" ? (
          <FaVideo className="text-red-500" title="Video" />
        ) : (
          <FaFilePdf className="text-blue-500" title="PDF" />
        )}
      </div>

      <p className="text-sm text-gray-600 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map(tag => (
          <span
            key={tag}
            className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium"
          >
            #{tag}
          </span>
        ))}
      </div>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        View Resource <FaExternalLinkAlt className="text-xs" />
      </a>
    </div>
  );
}
