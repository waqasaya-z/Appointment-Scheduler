const mongoose = require('mongoose');

const slotsSchema = new mongoose.Schema({
    StartTime: String,
    EndTime: String, 
})

module.exports = slotsSchema;