const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { USERFRONT_PUBLIC_KEY } = require('./environment');

// https://firebase.google.com/docs/functions/http-events#using_existing_express_apps

const app = express();
// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

const authenticateToken = async (req, res, next) => {
  // Read the JWT access token from the request header
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) {
    return res.status(401).json({
      message: 'Bad token',
    });
  }

  // Verify the token using the Userfront public key
  try {
    const auth = await jwt.verify(token, USERFRONT_PUBLIC_KEY);
    req.auth = auth;
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Bad token',
    });
  }
};

app.get('/data', authenticateToken, (req, res) => {
  return res.json({
    someSecretData: 'Nice Bebop!',
  });
});

// exports.helloWorld = functions
//   .region('asia-northeast1')
//   .https.onRequest((request, response) => {
//     functions.logger.info('Hello logs!', { structuredData: true });
//     response.send('Hello from Firebase!');
//   });

exports.cool = functions.region('asia-northeast1').https.onRequest(app);
