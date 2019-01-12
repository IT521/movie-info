import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

class MoviePreview extends React.Component {
  render() {
    return (
      <Link to={`/movie/${this.props.titleId}`}>
        <div className="movie-preview">
          <h2 className="title">
            {basics.primaryTitle}&nbsp;
            <span id="titleYear">
              &#40;
              <Link to={`movies/${basics.startYear}`}>{basics.startYear}</Link>
              &#41;
            </span>
          </h2>
        </div>
      </Link>
    );
  }
}

MoviePreview.propTypes = {
  titleId: PropTypes.string,
  basics: PropTypes.object
};
MoviePreview.defaultProps = {
  titleId: '',
  basics: {}
};

export default MoviePreview;
