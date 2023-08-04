//? Dependencies
import rateLimit from 'express-rate-limit';

export let rateLimit = () => {
    return rateLimit({
        windowMs: 30 * 1000,
        max: 5,
        standardHeaders: true,
        legacyHeaders: false,
        skip: (req, res) => {
            
        }
    })
}