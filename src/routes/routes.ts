import express, { Request, Response } from 'express';
const routes = express.Router();

routes.get('/api', (req: Request, res: Response) => {
  res.sendStatus(200);
  res.send('main api route');

  return;
});

export default routes;
