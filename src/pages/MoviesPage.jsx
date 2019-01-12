import React from 'react';
import { hot } from 'react-hot-loader';

// Containers
import HeaderContainer from 'Containers/HeaderContainer';
import FooterContainer from 'Containers/FooterContainer';

function MoviesPage() {
  return (
    <div className="moviespage">
      <HeaderContainer />
      Movies/Year/Genre
      <FooterContainer />
    </div>
  );
}

export default hot(module)(MoviesPage);
