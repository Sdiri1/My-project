import React from 'react';

export default function Filter({ filters, onChange }) {
  return (
    <div className="flex flex-col md:flex-row gap-3 md:items-end md:justify-between mb-4">
      <div className="flex gap-2 items-center">
        <label className="text-sm font-medium">Title:</label>
        <input
          value={filters.title}
          onChange={(e) => onChange({ ...filters, title: e.target.value })}
          placeholder="Search by title"
          className="px-3 py-2 rounded-md border"
        />
      </div>

      <div className="flex gap-2 items-center">
        <label className="text-sm font-medium">Min rating:</label>
        <select
          value={filters.rating}
          onChange={(e) => onChange({ ...filters, rating: Number(e.target.value) })}
          className="px-3 py-2 rounded-md border"
        >
          <option value={0}>All</option>
          <option value={1}>1+</option>
          <option value={2}>2+</option>
          <option value={3}>3+</option>
          <option value={4}>4+</option>
          <option value={5}>5</option>
        </select>
      </div>

      <div>
        <button
          onClick={() => onChange({ title: '', rating: 0 })}
          className="px-3 py-2 rounded-md bg-gray-200"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
