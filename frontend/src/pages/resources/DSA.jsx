import { useState } from 'react';
import { dsaResources } from '../../data/resourcesData';
import ResourceCard from './ResourceCard';

export default function DSA() {
  const [search, setSearch] = useState('');
  const [filterTag, setFilterTag] = useState('');

  const tags = Array.from(new Set(dsaResources.flatMap(item => item.tags)));
  const filtered = dsaResources.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()) &&
    (filterTag === '' || item.tags.includes(filterTag))
  );

  return (
    <div className="min-h-screen px-6 py-12 bg-gradient-to-br from-white to-blue-50 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">📘 DSA Resources</h1>

      <div className="max-w-4xl mx-auto mb-6">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search resources..."
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 shadow-sm"
        />
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilterTag('')}
            className={`px-3 py-1 rounded-lg text-sm ${filterTag === '' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            All
          </button>
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilterTag(tag)}
              className={`px-3 py-1 rounded-lg text-sm ${filterTag === tag ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {filtered.map((res, i) => <ResourceCard key={i} {...res} />)}
      </div>
    </div>
  );
}
