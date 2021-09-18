import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import * as dotenv from 'dotenv';

import { homeRouter } from './Route/index.js';
import { errorHandler, notFoundHandler } from './Middleware/index.js';

dotenv.config();
// process.env.NODE_ENV === "test" ? connectLocalDB() : connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
const environment = process.env.NODE_ENV || 'development';

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// don't use morgan while testing
if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'));

// api endpoints
app.use(homeRouter);

// error handling middlewares
app.use(errorHandler);
app.use(notFoundHandler);

app.listen(PORT, () => {
  console.info(`app running on ${environment} mode at port ${PORT} `);
});

export default app;
