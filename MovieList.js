import React from 'react';
import MovieCard from './MovieCard';

export default function MovieList({ movies, onDelete }) {
  if (!movies.length) return <p className="text-center text-gray-500">No movies found. Try adding one!</p>;

  return (
    <div className="grid gap-4">
      {movies.map((m) => (
        <MovieCard key={m.id} movie={m} onDelete={onDelete} />
      ))}
    </div>
  );
}
