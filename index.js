const express = require('express')
const scores = require('./scores')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.listen(1400, () => {
  console.log('Listening on 1400...') // eslint-disable-line no-console
})
