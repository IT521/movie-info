/* global personnel */
import React from 'react';
import { hot } from 'react-hot-loader';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

import NotFoundPage from 'Pages/NotFoundPage';
import MoviesMenu from 'Components/MoviesMenu';

class PrincipalPage extends React.Component {
  getStaff = (movie, categories) => {
    const { staff } = movie;
    const cast = staff
      .filter((member) => categories.includes(member.category))
      .sort((obj1, obj2) => obj1.ordering - obj2.ordering);
    return cast.map((member) => {
      return (
        <Link
          key={member.staffId}
          to={`principal/${member.primaryName}/${member.staffId}`}
        >
          {member.primaryName}
        </Link>
      );
    });
  };

  render() {
    const {
      params: { name, id }
    } = this.props;
    const person = personnel.find((person) => person.staffId === id);

    if (person) {
      const { basics = {}, ratings = {} } = person;
      /*
            const {
            category: '',
            job: '',
            characters = [],
            primaryName = '',
            birthYear = 9999,
            deathYear = 9999,
            primaryProfession = [],
            knownForTitles = []}
*/
      return (
        <div className="movie-full">
          <MoviesMenu movies={movies} />
          <div className="movie">
            <section className="title-container">
              <div className="titleBar">
                <div className="title_wrapper">
                  <h1 className="title">
                    {basics.primaryTitle}&nbsp;
                    <span id="titleYear">
                      &#40;
                      <Link to={`movies/${basics.startYear}`}>
                        {basics.startYear}
                      </Link>
                      &#41;
                    </span>
                  </h1>
                  <div className="subtext">
                    <span>{`${basics.runtimeMinutes} min`}</span>
                    <span className="ghost">|</span>
                    {this.getGenres(person)}
                    <span className="ghost">|</span>
                    <Link to={`movies/${basics.startYear}`}>
                      {basics.startYear}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="imdb-rating">
                <div className="ratingValue">
                  <strong title="7.8 based on 37,448 user ratings">
                    <span>{ratings.averageRating}</span>
                  </strong>
                  <span className="grey">/</span>
                  <span className="grey">10</span>
                </div>
                <div className="small">{ratings.numVotes}</div>
              </div>
            </section>
            <section className="crew">
              <section className="stars">
                <strong>Stars: </strong>
                {this.getStaff(person, ['actor', 'actress'])}
              </section>
              <section className="directors">
                <strong>Directors: </strong>
                {this.getStaff(person, ['director'])}
              </section>
              <section className="writers">
                <strong>Writers: </strong>
                {this.getStaff(person, ['writer'])}
              </section>
            </section>
          </div>
          <div className="navigateBack">
            <Link to="/">« Back to the index</Link>
          </div>
        </div>
      );
    } else {
      return <NotFoundPage />;
    }
  }
}

PrincipalPage.propTypes = {
  params: PropTypes.object
};
PrincipalPage.defaultProps = {
  params: {}
};

export default hot(module)(PrincipalPage);
