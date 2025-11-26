import React, { useState } from 'react';

export default function AddMovieForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState(3);

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return alert('Title is required');

    const newMovie = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim() || 'No description',
      posterURL: posterURL.trim() || `https://via.placeholder.com/300x420?text=${encodeURIComponent(title.trim())}`,
      rating: Number(rating),
    };
    onAdd(newMovie);
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating(3);
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-2xl shadow-sm">
      <h3 className="font-bold mb-3">Add a new movie</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="px-3 py-2 rounded-md border" />
        <input value={posterURL} onChange={(e) => setPosterURL(e.target.value)} placeholder="Poster URL (optional)" className="px-3 py-2 rounded-md border" />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description (optional)" className="px-3 py-2 rounded-md border md:col-span-2" rows={3} />
        <div className="flex items-center gap-2">
          <label className="text-sm">Rating:</label>
          <select value={rating} onChange={(e) => setRating(Number(e.target.value))} className="px-3 py-2 rounded-md border">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
      </div>
      <div className="mt-3 flex gap-2">
        <button type="submit" className="px-4 py-2 rounded-md bg-blue-600 text-white">Add movie</button>
        <button type="button" onClick={() => { setTitle(''); setDescription(''); setPosterURL(''); setRating(3); }} className="px-4 py-2 rounded-md bg-gray-200">Clear</button>
      </div>
    </form>
  );
}
