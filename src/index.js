import 'dotenv/config';

import express from 'express';
import bodyParser from 'body-parser';
import apiRoutes from './routes';
import { serverResponse } from './utils/helpers';

const port = process.env.PORT || '5400';
const  environment = process.env.NODE_ENV || 'development';
const app = express(); // setup express application

// server plugins & default middlewares
app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({
    extended: false,
  }));

app.use('/api/v1', apiRoutes);

app.get('/', (req, res) => {
  serverResponse(res, 'PrimePhonics App API');
});

app.get('/*', (req, res) => {
  serverResponse(res, 'invalid route. Try `/` or `/api/v1/`', 404, 'error');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`app[${environment}] is running on port ${port}`);
});

export default app;
