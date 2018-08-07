const mongoose = require("mongoose");

const reply = new mongoose.Schema({
    essayid: String,
    replyname: String,
    replyimg:String,
    replycontent: String,
},{versionKey:false})
module.exports = mongoose.model("reply", reply)