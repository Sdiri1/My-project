import React from 'react';
import StarRating from './StarRating';

export default function MovieCard({ movie, onDelete }) {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-md overflow-hidden p-4" style={{ maxWidth: 900 }}>
      <img
        src={movie.posterURL}
        alt={`${movie.title} poster`}
        style={{ width: 180, height: 260, objectFit: 'cover', borderRadius: 12 }}
        className="mr-4 self-center"
      />
      <div className="flex-1">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold">{movie.title}</h3>
            <div className="text-sm text-gray-600 mt-1"><StarRating rating={movie.rating} /></div>
          </div>
          <button
            onClick={() => onDelete(movie.id)}
            className="text-sm px-3 py-1 rounded-md bg-red-500 text-white hover:opacity-90"
          >
            Delete
          </button>
        </div>
        <p className="mt-3 text-gray-700">{movie.description}</p>
      </div>
    </div>
  );
}
