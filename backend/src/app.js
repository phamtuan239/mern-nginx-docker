const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const personRoutes = require('./routes/person.routes')

require('./mongodb')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use(personRoutes)

app.listen(5000, () => {
  console.log('Listening on port 5000')
})
