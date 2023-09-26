const express = require('express')
const app = express()

// use html view files
const path = require('path')
app.use(express.static(path.join(__dirname, 'views')))

// show form data in request
const parseUrl = require('body-parser');
let encodeUrl = parseUrl.urlencoded({ extended: true });

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

const validId = require('./validate')

app.post('/validate', encodeUrl, (req, res) => {
  console.log(req.body.idcode)
  res.send(validId.idInfo(req.body.idcode))
})

app.post('/validate', encodeUrl, (req, res) => {
  console.log(req.body.idcode)
})

app.listen(3000, () => {
  console.log('Example app is started at http://localhost:3000')
})