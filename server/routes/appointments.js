const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const appointmentSchema = require('../schemas/AppointmentSchema');

const Appointments = mongoose.model( 'Appointment' ,appointmentSchema);

router.get('/', (req,res) => {

    const data = Appointments.find()
    console.log(data)
    return res.json(data).status(200)
})

router.post('/', (req,res) => {
    const { name, email } = req.body;

   const updated = Appointments.

   res.status(200)
})


module.exports = router