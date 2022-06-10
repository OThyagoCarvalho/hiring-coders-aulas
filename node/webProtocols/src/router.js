import { Router } from 'express';
import UserController from './app/controllers/UserControllers'
import  Database from './database/index'

const routes = new Router();

routes.post('/users', UserController.store)

export default routes;
