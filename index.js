const express = require('express')
const createError = require('http-errors')
const app = express()
const port = 3000

app.use(function (req, res, next) {
  if (!req.header('Authorization')) return next(createError(401, 'Unauthorized'))
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World!!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
