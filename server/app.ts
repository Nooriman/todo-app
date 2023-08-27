import express from 'express';
// import db from './db/db';
import authRoute from './routes/auth';

const app = express();

app.use('/auth', authRoute);

const port = 3000;

app.listen(port, () => {
    console.log(`Server listening to port ${port}`)
})