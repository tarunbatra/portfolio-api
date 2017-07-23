/**
 * @file Entry point to the app
 */

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Responder = require('./services/responder');
const Trades = require('./controllers/trades');

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost/portfolio';

const app = express();
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Parse application/json
app.use(bodyParser.json());
// initialize response payload
app.use(Responder.init);

app.get('/trades/:id', Trades.get);
app.get('/', Trades.fetchPortfolio);
app.post('/addTrade', Trades.create);
app.post('/updateTrade/:id', Trades.update);
app.post('/removeTrade/:id', Trades.delete);

// Dispatch response payload
app.use(Responder.reply);

// Start the server
connectDatabase()
  .on('error', console.log)
  .on('disconnected', connectDatabase)
  .once('open', listenRequests);

function listenRequests () {
  app.listen(PORT);
  console.log(`Server running at ${PORT}`);
}

function connectDatabase () {
  return mongoose.connect(MONGO_URL).connection;
}
