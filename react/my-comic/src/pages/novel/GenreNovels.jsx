import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
/**
 * @Todo 클라이언트가 링크를 통해 제공하는 경로에만 접근할 수 있도록 하고,
 * 유효하지 않은 URL로의 접근을 방지헤야 한다.
 */
export default function GenreNovels() {
  const { genre } = useParams();

  const genres = new Set([
    'romance',
    'fantasy',
    'modern-fantasy',
    'martial-arts',
  ]);

  if (!genres.has(genre)) {
    console.error('잘못된 경로');
    return <Navigate to="/novel" replace></Navigate>;
  } else {
    return <div> {genre} 페이지 GenreNovels</div>;
  }
}
