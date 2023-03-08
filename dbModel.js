const mongoose = require('mongoose')

const tiktokSchema = mongoose.Schema({
    url: String,
    channel: String,
    song: String,
    likes: String,
    messages: String,
    share: String,
    description: String
})

const tiktokvideos = mongoose.model('tiktokvideos', tiktokSchema)
module.exports = tiktokvideos
