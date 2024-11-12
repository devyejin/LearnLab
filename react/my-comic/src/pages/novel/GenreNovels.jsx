import React from 'react';
import { useParams } from 'react-router-dom';

export default function GenreNovels() {
  const { genre } = useParams();
  console.log(genre);
  return <div> {genre} 페이지 GenreNovels</div>;
}
