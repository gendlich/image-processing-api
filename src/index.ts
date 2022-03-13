const express = require('express')
const app = express()
const port = 3000

app.get('/api', (req: any , res: any) => {
  res.send('Hello World32131232!');
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})