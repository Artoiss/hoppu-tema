const express = require('express')
//const axios = require('axios')
const app = express()
const bodyParser = require('body-parser')
//app.use(express.static('build'))
app.use(bodyParser.json())

app.get('/api/test', (req, res) => {
    const test_json = {"hello_string": "Hello World!"}
    res.json(test_json)
})

//app.get('api/order/:id', (req, res) => {
    
//})

const PORT = 3001
app.listen(PORT, () => {
	console.log(`server is running on port ${PORT}`)
})


//const getOrder = axios.get(`https://${APIKEY}:${PASS}@veitsiapu.myshopify.com/admin/api/2019-10/orders/1866048143437.json`)