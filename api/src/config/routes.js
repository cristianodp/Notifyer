const constrants = require('../constants')
const express = require('express')
const sendMessage = require('../api/message/send-message');

module.exports = function(server,io){
    
    io.on('connection', function(socket){
        console.log("Client Connected");
        socket.emit('update', { message: 'Hello Client',update:false });
          socket.on('update', function(msg){
            console.log(msg);
        });
    });

    const openApi = express.Router()
    server.use('/api', openApi)
    const DeviceServices = require('../api/devices/deviceServices')
    DeviceServices.register(openApi, '/device')

    server.post('/send',function(req,res){
    
      var message = req.body.message;
      var registrationId = req.body.registrationId;
    
      sendFunction.sendMessage(message,registrationId,function(result){
    
        res.json(result);
      });
    });
    

}