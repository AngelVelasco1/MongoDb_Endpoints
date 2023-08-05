//? Dependencies
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
dotenv.config('../')

export const conx = async () => {
    try {
        const uri = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@cluster0.tfk8jyc.mongodb.net/${process.env.ATLAS_DB}`;
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        };

        const client = await MongoClient.connect(uri, options);
        //? Habilitar sintaxis clasica
        return client.db();
    } 
    catch(err) {
        return {status: 500, message: err}
    }   
}
