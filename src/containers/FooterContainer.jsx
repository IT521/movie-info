import React from 'react';
import { hot } from 'react-hot-loader';

const currentDate = new Date();

function FooterContainer() {
  return (
    <footer>
      <div id="legal">
        <span>&copy; Copyright. MovieInfo </span>
        {currentDate.getFullYear()}
        <span>. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default hot(module)(FooterContainer);
