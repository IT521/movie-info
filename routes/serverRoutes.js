const defaultOptions = {
  root: `${__dirname}/dist/`,
  dotfiles: 'deny'
};

const appRouter = (app, db) => {
  const collection = db.collection('movies');

  app.get('/', (req, res) => {
    global.serverData = {
      movies: []
    };
    const options = {
      ...defaultOptions,
      headers: { 'x-timestamp': Date.now(), 'x-sent': true }
    };
    res.status(200).sendFile('index.html', options);
  });

  app.get('/movie', (req, res) => {
    const options = {
      ...defaultOptions,
      headers: { 'x-timestamp': Date.now(), 'x-sent': true }
    };

    res.status(200).sendFile('movie.html', options);
  });

  app.get('/movies', (req, res) => {
    const options = {
      ...defaultOptions,
      headers: { 'x-timestamp': Date.now(), 'x-sent': true }
    };

    res.status(200).sendFile('movies.html', options);
  });

  app.get('/principal', (req, res) => {
    const options = {
      ...defaultOptions,
      headers: { 'x-timestamp': Date.now(), 'x-sent': true }
    };

    res.status(200).sendFile('principal.html', options);
  });

  app.post('/send', (req, res) => {
    // const options = {
    //   ...defaultOptions,
    //   headers: { 'x-timestamp': Date.now(), 'x-sent': true }
    // };

    const { name, email, movie } = req.body;
    const content = `Movie: ${movie} \n`;
    const mail = { from: name, to: email, subject: movie, text: content };
    const cursor = collection.find().toArray((err, results) => {
      console.log(results);
      // send HTML file populated with quotes here
    });

    console.log(mail); // eslint-disable-line

    // transporter.sendMail(mail, (err, data) => {
    //   if (err) {
    //     res.json({
    //       msg: 'fail'
    //     });
    //   } else {
    //     res.json({
    //       msg: 'success'
    //     });
    //   }
    // });
  });
};

module.exports = appRouter;
