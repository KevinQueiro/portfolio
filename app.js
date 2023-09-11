import express from "express";
import morgan from "morgan";
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from "body-parser";

import indexRoutes from './routes/index.routes.js'

const app = express();

app.use(bodyParser.json())

dotenv.config();

app.use(cors());

app.use(morgan('dev'))

app.use(indexRoutes)

export default app;
