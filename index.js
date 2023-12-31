const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 5000;

// midleware
app.use(cors())
app.use(express.json())



app.get('/', (req, res) => {
    res.send('server is running')
})

app.listen(port, () => {
    console.log(`basic server is running on port ${port}`)
})