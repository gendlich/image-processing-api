import configurarTamanho from '../../transformer';
import express, { Request, Response } from 'express';
import * as path from 'path';
import * as fs from 'fs';

const imageRoute = express.Router();

imageRoute.get('/', async (req: Request, res: Response): Promise<void> => {
  const imageName = req.query.name as string;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);

  const filePath = path.join(__dirname, '../../../public', 'thumb');
  if (!fs.existsSync(filePath))
    fs.mkdir(path.join(filePath), (err) => {
      if (err) throw err;
    });

  const imagePath = path.join(
    __dirname,
    '../../../public',
    'thumb',
    `${imageName}-${width}-${height}.jpg`
  );

  if (!(imageName || width || height)) {
    res
      .status(400)
      .send(
        'There are missing parameters, go to README to learn how to use the API'
      );
    return;
  } else if (
    !(
      imageName == 'encenadaport' ||
      imageName == 'fjord' ||
      imageName == 'icelandwaterfall' ||
      imageName == 'palmtunnel' ||
      imageName == 'santamonica'
    )
  ) {
    res
      .status(400)
      .send('invalid name parameter, go to README to learn how to use the API');
    return;
  } else if (width <= 0 || height <= 0) {
    res.status(400).send('width and height has to be an integer and positive');
    return;
  } else if (isNaN(width) || isNaN(height)) {
    res.status(400).send('width and height has to be a number');
    return;
  } else if (fs.existsSync(imagePath)) {
    res.status(200).sendFile(imagePath);
    return;
  }

  await configurarTamanho(imageName, width, height);
  res.status(200).sendFile(imagePath);
});

export default imageRoute;
