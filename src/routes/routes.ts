import express from 'express';
import imageRoute from './api/image';

const routes = express.Router();

routes.use('/image', imageRoute);

export default routes;
