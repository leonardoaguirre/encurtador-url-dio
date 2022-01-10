import { URLController } from '../controller/URLController';
import { Router } from "express";

const urlController = new URLController()
const urlRoutes = Router()

urlRoutes.post('/encurtar', urlController.encurtar)
urlRoutes.get('/:hash', urlController.redirecionar)

export default urlRoutes;