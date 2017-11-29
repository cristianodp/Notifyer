const {server,socket} = require('./config/server')
require('./config/database')
require('./config/routes')(server,socket)