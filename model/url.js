const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const urlSchema = new Schema({
    urlcode: String,
    longUrl: String,
    shortUrl: String,
    date: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model("url", urlSchema)