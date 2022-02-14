const express = require('express')
const app = express()
const router = require('./src/routes/routes')
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use('/', router)


app.listen(3000, () => console.log('Servidor rodando..'))