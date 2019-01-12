import React from 'react';
import { hot } from 'react-hot-loader';

function HeaderContainer() {
  return (
    <header>
      <a href="/" id="logo">
        Movie Info
      </a>
      <input
        id="movie-search-input"
        placeholder="movie title"
        aria-label="movie title. search movies"
        style={{ opacity: 0 }}
      />
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/movies">Movies</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default hot(module)(HeaderContainer);
