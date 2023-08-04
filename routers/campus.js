//? Dependencies
import { ObjectId } from 'mongodb';
import { limitGrt } from '../middleware/limit.js';
import { conx } from '../db/atlas.js';
import { Router } from 'express';

const appCampus = Router();

appCampus.get('/', limitGrt(), (req, res) => {
    
})