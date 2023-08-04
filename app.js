//? Dependencies 
import express from 'express';
import dotenv from 'dotenv';
import storageCampus from './routers/campus.js'

const app = express();

app.use(express.json());
app.use(express.text());
app.use(storageCampus);

dotenv.config();

//? Server
const SERVER = JSON.parse(process.env.SERVER);
app.listen(SERVER, () => {
    console.log(`http://${SERVER.hostname}:${SERVER.port}`);
})

