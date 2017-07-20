/**
 * @file Entry point to the app
 */

const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

// Start the server
const server = app.listen(PORT, (err) => {
  err ? console.error(err)
      : console.log(`Server running at ${PORT}`);
});
