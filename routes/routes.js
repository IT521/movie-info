import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from 'Components/Layout';
import HomePage from 'Pages/HomePage';
import MoviePage from 'Pages/MoviePage';
import MoviesPage from 'Pages/MoviesPage';
import NotFoundPage from 'Pages/NotFoundPage';
import PrincipalPage from 'Pages/PrincipalPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={HomePage} />
    <Route path="movie/:id" component={MoviePage} />
    <Route path="movies/:genre" component={MoviesPage} />
    <Route path="movies/:genre/:year" component={MoviesPage} />
    <Route path="movies/:year" component={MoviesPage} />
    <Route path="movies/:year/:genre" component={MoviesPage} />
    <Route path="principal/:name/:id" component={PrincipalPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

export default routes;
