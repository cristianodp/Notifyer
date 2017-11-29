const restful = require("node-restful");
const mongoose = restful.mongoose;


const device = new mongoose.Schema({
    deviceName: { type: String, required: true },
    deviceId: { type: String, required: true },
    groupId: { type: String, required: true },
    registrationId: { type: String, required: true }
    
});

module.exports = restful.model("device", device)
   