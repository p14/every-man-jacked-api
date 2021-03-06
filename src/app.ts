import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import routes from './routes';
import connect from './utils/connect';
import logger from './utils/logger';

const corsOptions = {
  credentials: true,
  origin: ['http://localhost:3000', 'https://everymanjacked.com'],
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

const api = express();
app.use('/api', api);

app.listen(process.env.PORT, async () => {
  logger.info(`App is running at http://localhost:${process.env.PORT}`);

  await connect();

  routes(api);
});
