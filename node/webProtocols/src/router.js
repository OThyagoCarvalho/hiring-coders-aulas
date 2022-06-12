import { Router } from 'express';
import UserController from './app/controllers/UserControllers';
import SessionController from './app/controllers/SessionControllers';
import Database from './database/index';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

// AUTHENTICATION REQUIRED ROUTES
routes.use(authMiddleware);
routes.put('/users', UserController.update);

export default routes;
