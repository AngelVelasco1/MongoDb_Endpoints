//? Dependencies
import { limitGrt } from '../middleware/limit.js';
import { conx } from '../db/atlas.js';
import { Router } from 'express';

const appCampus = Router();

appCampus.get('/', limitGrt(), async(req, res) => {
    if(!req.rateLimit) return;
    res.send("Exitoso");
})

export default appCampus;