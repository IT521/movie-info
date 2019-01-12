import React from 'react';
// import PropTypes from 'prop-types';

function SendMovieInfo() {
  return (
    <form action="/send" method="POST">
      Name:&nbsp;
      <input type="text" placeholder="name" name="name" />
      <br />
      E-mail:nbsp;
      <input type="email" placeholder="email" name="email" />
      <br />
      Movie:&nbsp;
      <input type="text" placeholder="movie" name="movie" />
      <button type="submit">Submit</button>
    </form>
  );
}

SendMovieInfo.propTypes = {};
SendMovieInfo.defaultProps = {};

export default SendMovieInfo;
