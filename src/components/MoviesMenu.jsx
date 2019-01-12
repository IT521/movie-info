import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

class MoviesMenu extends React.Component {
  render() {
    return (
      <nav className="movies-menu">
        {this.props.movies.map((movie) => {
          return (
            <Link
              key={movie.titleId}
              to={`/movie/${movie.titleId}`}
              activeClassName="active"
            >
              {movie.basics.primaryTitle}
            </Link>
          );
        })}
      </nav>
    );
  }
}

MoviesMenu.propTypes = {
  movies: PropTypes.array
};
MoviesMenu.defaultProps = {
  movies: []
};

export default MoviesMenu;
