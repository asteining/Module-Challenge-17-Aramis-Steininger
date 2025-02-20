import express, { urlencoded, json } from 'express';
import connection from './config/connection.js';
import routes from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(routes);

connection.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
