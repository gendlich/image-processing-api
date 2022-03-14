import configurarTamanho from '../../transformer';
import express, { Request, Response } from 'express';
import * as path from 'path';
const imageRoute = express.Router();

imageRoute.get('/api/image', async (req: Request, res: Response) => {
  const imageName = req.query.name as string;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);

  await configurarTamanho(imageName, width, height);
  console.log('./../../../public/thumb/'+imageName+'-'+width+'-'+height+'.jpg');
  res.status(200).sendFile(path.join(__dirname, '../../../public', 'thumb', `${imageName}-${width}-${height}.jpg`));
});

export default imageRoute;
