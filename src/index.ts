import { config } from './config/constants';
import express, { Request, Response } from "express";
import urlRoutes from './routes/URL.routes';

const api = express()
api.use(express.json())

api.get('/status',(request : Request, response : Response)=>{
    response.status(200).json("Server is Running!")
})

api.use(urlRoutes)

api.listen(config.SERVER_PORT, ()=> console.log(`Server na porta : ${config.API_URL}/status`))