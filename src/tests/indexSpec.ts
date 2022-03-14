import supertest from 'supertest';
import app from './../index'
import configurarTamanho from '../transformer';
import * as path from 'path';
import * as fs from 'fs';

const request = supertest(app);
describe('endpoint testing:', () =>{
it('should test if the api endpoint is working', async () => {
  const res = await request.get('/api');
  expect(res.status).toBe(200);
})
})

describe('image resize function testing:', () => {
it('should generate a new processed image', async () => {
  const imageName = 'icelandwaterfall';
  const width = 200;
  const height = 200;
  const imagePath = path.join(
    __dirname,
    '../../public',
    'thumb',
    `${imageName}-${width}-${height}.jpg`
  );

  await configurarTamanho(imageName, width, height)
  expect(fs.existsSync(imagePath)).toBe(true)
})
})