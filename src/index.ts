import express from 'express';
import routes from './routes/routes';
import configurarTamanho from './transformer';
const app = express();
const port = 3002;

// app.use('/api', routes);
app.use(express.static('assets'));

app.get('/api', (req, res) => {
  const imageName = req.query.name as string;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);

  configurarTamanho(imageName, width, height);
  res.send(`nome=${imageName}.jpg largura=${width}px altura=${height}px`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
