import React from 'react';
import ReactDOM from 'react-dom';

import { render } from 'Utilities/render';
import AppRoutes from 'Components/AppRoutes';

window.onload = () => {
  render(AppRoutes);
};

if (module.hot) {
  module.hot.accept('Pages/AppRoutes', () => {
    const NextRootContainer = require('Pages/AppRoutes').default;
    render(NextRootContainer);
  });
}
