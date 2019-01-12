/* eslint-disable no-console,no-unused-vars,consistent-return */

import path from 'path';
import { Server } from 'http';
import Express from 'express';
import bodyParser from 'body-parser';
import MongoClient from 'mongodb';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

import NotFoundPage from 'Pages/NotFoundPage';
import routes from 'Routes/routes';
import { dbName, dbUrl } from 'Configs/dbConfig';

const app = new Express();
const server = new Server(app);
const port = process.env.npm_package_config_node_port || 3000;
const env = process.env.NODE_ENV || 'production';

let db;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public/views'));

app.use(Express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*', (req, res) => {
  match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
    // in case of error display the error message
    if (err) {
      return res.status(500).send(err.message);
    }

    // in case of redirect propagate the redirect to the browser
    if (redirectLocation) {
      return res.redirect(
        302,
        redirectLocation.pathname + redirectLocation.search
      );
    }

    // generate the React markup for the current route
    let markup;
    if (renderProps) {
      // if the current route matched we have renderProps
      markup = renderToString(<RouterContext {...renderProps} />);
    } else {
      // otherwise we can render a 404 page
      markup = renderToString(<NotFoundPage />);
      res.status(404);
    }

    // render the index template with the embedded React markup
    return res.render('index', { markup });
  });
});

MongoClient.connect(
  dbUrl,
  (err, client) => {
    if (err) {
      return console.error(err);
    }

    db = client.db(dbName);

    global.movies = db
      .collection('movies')
      .find()
      .toArray();
    global.personnel = db
      .collection('personnel')
      .find()
      .toArray();
    global.genres = db
      .collection('genres')
      .find()
      .toArray();

    server.listen(port, (err) => {
      if (err) {
        return console.error(err);
      }
      console.info(`Server running on http://localhost:${port} [${env}]`);
    });
  }
);
