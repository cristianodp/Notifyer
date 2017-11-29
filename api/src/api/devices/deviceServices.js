const Device = require('./device')
const errorHandler = require('../common/errorHandler')

Device.methods(['get','post','put','delete'])
Device.updateOptions({new: true, runValidators: true})
Device.after('post', errorHandler)
Device.after('put', errorHandler)

Device.before('post', function(req, res, next) {
  var obj = req.body
  
  Device.find({registrationId : obj.registrationId},(error,result) =>{
    if (error){
      res.status(500).json({errors: [error]})
    }else{
      if (result.length > 0){
        res.status(500).json({errors: ["Device ja registrado"]})
      }else{
        next();
      }
    }
  })

});

module.exports = Device