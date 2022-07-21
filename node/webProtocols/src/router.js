import { Router } from 'express';
import multer from 'multer';
import UserController from './app/controllers/UserControllers';
import SessionController from './app/controllers/SessionControllers';
import Database from './database/index';
import authMiddleware from './app/middlewares/auth';
import multerConfig from './config/multer';
import FileController from './app/controllers/FileControllers';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

// AUTHENTICATION REQUIRED ROUTES
routes.use(authMiddleware);
routes.put('/users', UserController.update);

// UPLOAD FILES

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
