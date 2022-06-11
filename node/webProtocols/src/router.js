import { Router } from 'express';
import UserController from './app/controllers/UserControllers';
import SessionController from './app/controllers/SessionControllers';
import Database from './database/index';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

export default routes;
