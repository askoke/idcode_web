const express = require('express')
const app = express()

// use ejs files to prepare templates for views
const path = require('path')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// show form data in request
const parseUrl = require('body-parser');
let encodeUrl = parseUrl.urlencoded({ extended: true });

app.get('/', (req, res) => {
  res.render('validate_form')
})


const validId = require('./validate')

app.post('/validate', encodeUrl, (req, res) => {
  res.send(validId.idInfo(req.body.idcode))
})

app.listen(3000, () => {
  console.log('Example app is started at http://localhost:3000')
})