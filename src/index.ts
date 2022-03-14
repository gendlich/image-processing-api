import express, { Request, Response } from 'express';
import routes from './routes/routes';
import imageRoute from './routes/api/image';
const app = express();
const port = 3002;


app.use(routes);
app.use(imageRoute);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
