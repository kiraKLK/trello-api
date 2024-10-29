const express = require('express')

const hostname = 'localhost'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})