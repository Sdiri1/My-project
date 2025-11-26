import React from 'react';

export default function StarRating({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(i <= rating ? '★' : '☆');
  }
  return (
    <span style={{ letterSpacing: 2, fontSize: 18 }}>
      {stars.join('')}
    </span>
  );
}
