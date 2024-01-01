const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
    name: String,
    email: String, 
})

module.exports = appointmentSchema;