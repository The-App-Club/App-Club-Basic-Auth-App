const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const {clientOrigins, serverPort} = require('./config/env.dev');

const {messagesRouter} = require('./messages/messages.router');

const app = express();
const apiRouter = express.Router();

app.use(helmet());
app.use(cors({origin: clientOrigins}));
app.use(express.json());

// NEW - Add CORS headers - see https://enable-cors.org/server_expressjs.html
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.use('/api', apiRouter);

apiRouter.use('/messages', messagesRouter);

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).send(err.message);
});

exports.bebop = functions.region('asia-northeast1').https.onRequest(app);
