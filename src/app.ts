import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import 'reflect-metadata';


dotenv.config(); // Load environment variables

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000; 
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.listen(port, () => {
    console.log(` Server is running on port ${port}`);
});