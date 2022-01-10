import { URLController } from '../controller/URLController';
import { Router } from "express";
import MongoConnection from '../database/MongoConnection';

const urlController = new URLController()
const urlRoutes = Router()

const database = new MongoConnection()
database.connection()

urlRoutes.post('/encurtar', urlController.encurtar)
urlRoutes.get('/:hash', urlController.redirecionar)

export default urlRoutes;