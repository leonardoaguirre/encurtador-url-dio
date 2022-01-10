import { configs } from './config/constants';
import express, { Request, Response } from "express";
import urlRoutes from './routes/URL.routes';

const api = express()
api.use(express.json())

api.get('/status',(request : Request, response : Response)=>{
    response.status(200).json("Server is Running!")
})

api.use(urlRoutes)

api.listen(configs.SERVER_PORT, ()=> console.log(`Server na porta : ${configs.API_URL}/status`))