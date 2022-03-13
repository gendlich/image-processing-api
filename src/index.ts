const express = require('express');
const app = express();
const port = 3000;

app.get('/api', (req: any, res: any) => {
  res.status(200).json({ test: 'test' });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
