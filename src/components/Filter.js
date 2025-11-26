import React from 'react';

function Filter({ titleFilter, setTitleFilter, ratingFilter, setRatingFilter }) {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
      />
      <select value={ratingFilter} onChange={(e) => setRatingFilter(Number(e.target.value))}>
        <option value={0}>All ratings</option>
        <option value={1}>1+ stars</option>
        <option value={2}>2+ stars</option>
        <option value={3}>3+ stars</option>
        <option value={4}>4+ stars</option>
        <option value={5}>5 stars</option>
      </select>
    </div>
  );
}

export default Filter;
