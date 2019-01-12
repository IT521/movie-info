/* global movies */
import React from 'react';
import { hot } from 'react-hot-loader';

import MoviePreview from 'Components/MoviePreview';

function HomePage(props) {
  return (
    <div className="home">
      <div className="movies-selector">
        {movies.map((movieData) => (
          <MoviePreview key={movieData.titleId} {...movieData} />
        ))}
      </div>
    </div>
  );
}

export default hot(module)(HomePage);
