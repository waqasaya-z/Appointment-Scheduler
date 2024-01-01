const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const slotsSchema = require('../schemas/SlotSchema');

const Slots = mongoose.model( 'Slot' ,slotsSchema);

router.get('/', (req,res) => {

    const data = Slots.find()

    return res.json(data).status(200)
})

router.post('/', (req,res) => {
    const { StartTime, EndTime } = req.body;

    const data = Slots.create({
        StartTime: StartTime,
        EndTime: EndTime
    })

    res.status(200)
})

module.exports = router