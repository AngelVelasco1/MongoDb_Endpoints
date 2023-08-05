//? Dependencies 
import express from 'express';
import dotenv from 'dotenv';
import storageCampers from './routers/campers.js'

const app = express();

app.use(express.json());
app.use(express.text());
app.use('/campers', storageCampers);

dotenv.config();

//? Server
const server = JSON.parse(process.env.SERVER);
app.listen(server, () => {
    console.log(`http://${server.hostname}:${server.port}`);
})

