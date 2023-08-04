//? Dependencies
import rateLimit from 'express-rate-limit';

export const limitGrt = () => {
    return rateLimit({
        windowMs: 30 * 1000,
        max: 5,
        standardHeaders: true,
        legacyHeaders: false,
        skip: (req, res) => {
            
        }
    })
}
