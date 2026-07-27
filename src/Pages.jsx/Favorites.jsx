import React from 'react'
import "../css/Favorites.css"
import { useMovieContext } from '../Contexts/MovieContext';
import MovieCard from '../Components/MovieCard';

const Favorites = () => {

  const { favorites } = useMovieContext();

  if (favorites && favorites.length > 0) {
    return (
      <div className='favorites'>
        <h3>Your Favorites</h3>
        <div className="movies-grid">

          {favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}

        </div>
      </div>
    );
  }

  return (
    <div className='favorites-empty'>
      <h3>No Favorite Movies Yet</h3>
      <p>Start adding movies to your favorites and they will appear here</p>
    </div>
  )
}

export default Favorites