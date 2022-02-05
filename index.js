const express = require('express');
const cors = require('cors');
require('dotenv').config();

const withRoutes = require('./src/routes');

const app = express();
const port = 3000;

app.use(cors());

withRoutes(app);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.info(`Server is listening on port ${port}`);
});
