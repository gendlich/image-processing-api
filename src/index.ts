import express from 'express';
import routes from './routes/routes';
import configurarTamanho from './transformer';
const app = express();
const port = 3000;

// app.use('/api', routes);
app.use(express.static('assets'))

app.use('/api', (req, res) => {
  const imageName = req.query.name as string;
  const w = req.query.width as unknown as number;
  const h= req.query.height as unknown as number;
  
  res.send(`nome=${imageName}.jpg largura=${w}px altura=${h}px`)
  configurarTamanho(imageName, w, h);
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

