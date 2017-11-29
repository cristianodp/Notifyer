const port = process.env.PORT || 3002

const bodyParser = require('body-parser')
const express = require('express')
const allowCors = require('./cors')
const queryParser = require('express-query-int')
const server = express()
const io = require('socket.io');

server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())

var listen = server.listen(port, function(){
    console.log(`BACKEND is running on port ${port}`)
})

var socket = io.listen(listen);

module.exports = {server,socket}