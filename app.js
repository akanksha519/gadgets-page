const express = require('express')
const app = express()

app.get('/gadgets', (request, response) => {
  request.sendFile('./gadgets.html', {root: __dirname})
})

module.exports = app
