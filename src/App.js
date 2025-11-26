import React, { useState, useMemo } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovieForm from './components/AddMovieForm';

const initialMovies = [
  {
    id: 1,
    title: 'The Matrix',
    description: 'A hacker discovers that reality is a simulation and joins a rebellion against the machines.',
    posterURL: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRvR34ISAvkOQ97P2WL5AiZLNwZbDHYJal-EsRi20B4EFC8JarpvjkadqjOJdT_YA91qyVgQzVelJfybhTFPsoWmjmqzPquh2FQiZTN8sA',
    rating: 5,
  },
  {
    id: 2,
    title: 'Inception',
    description: "A skilled thief is given a chance to have his criminal history erased by planting an idea into a target's subconscious.",
    posterURL: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS9T6iiPWwzjxVmtDUpTQZ-JL10jT74rPKpMQaegqsFlG6sR3HyeungVIY8Eb4PxSPm25XQoh6yJvqoyPI5hnrvp63tm9gWWofGyU8JYQ',
    rating: 4,
  },
  {
    id: 3,
    title: 'Toy Story',
    description: 'Toys come to life when people are not around and must cope with change as their owner grows up.',
    posterURL: 'https://fr.web.img3.acsta.net/pictures/19/06/12/17/42/4485647.jpg',
    rating: 4,
  },
];

export default function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [filters, setFilters] = useState({ title: '', rating: 0 });

  const filteredMovies = useMemo(() => {
    const t = filters.title.trim().toLowerCase();
    return movies.filter((m) => m.title.toLowerCase().includes(t) && m.rating >= filters.rating);
  }, [movies, filters]);

  function handleAdd(movie) {
    setMovies((prev) => [movie, ...prev]);
  }

  function handleDelete(id) {
    setMovies((prev) => prev.filter((m) => m.id !== id));
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <header className="mb-6">
          <h1 className="text-3xl font-bold">My Movie App</h1>
          <p className="text-gray-600">Add your favourites, then filter by title or minimum rating.</p>
        </header>

        <main className="space-y-6">
          <AddMovieForm onAdd={handleAdd} />
          <section className="bg-white p-4 rounded-2xl shadow-sm">
            <Filter filters={filters} onChange={setFilters} />
            <MovieList movies={filteredMovies} onDelete={handleDelete} />
          </section>
        </main>
      </div>
    </div>
  );
}
