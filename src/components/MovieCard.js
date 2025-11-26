import React from 'react';

function MovieCard({ movie, onDelete }) {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} />
      <div className="movie-card-content">
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <p>⭐ {movie.rating}</p>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default MovieCard;
