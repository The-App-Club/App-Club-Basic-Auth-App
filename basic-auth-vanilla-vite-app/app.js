const express = require('express');
const auth = require('./auth');
const app = express();

require('dotenv').config();

app.use(auth);

app.use(express.static('./src'));

app.use((req, res) => {
  res.sendStatus(404);
});

switch (process.env.COOL_APP_SERVE_MODE) {
  case 'localhost':
    app.listen(process.env.COOL_APP_SERVE_PORT, () => {
      console.log(
        `${process.env.COOL_APP_LOCALHOST_URL}:${process.env.COOL_APP_SERVE_PORT}`
      );
    });

    break;
  case 'development':
    app.listen(process.env.COOL_APP_SERVE_PORT, () => {
      console.log(
        `${process.env.COOL_APP_DEVELOPMENT_URL}:${process.env.COOL_APP_SERVE_PORT}`
      );
    });
    break;

  case 'production':
    app.listen(process.env.COOL_APP_SERVE_PORT, () => {
      console.log(
        `${process.env.COOL_APP_PRODUCTION_URLL}:${process.env.COOL_APP_SERVE_PORT}`
      );
    });
    break;

  default:
    app.listen(process.env.COOL_APP_SERVE_PORT, () => {
      console.log(
        `${process.env.COOL_APP_LOCALHOST_URL}:${process.env.COOL_APP_SERVE_PORT}`
      );
    });

    break;
}
