const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const Slot = require('./routes/slots')
const Appointment = require('./routes/appointments')
dotenv.config()

//mongodb://localhost:27017
mongoose.connect("mongodb://localhost/scheduler")
.then(() => console.log('Database is running'))
.catch((err) => console.log(err))

const app = express();
app.use(express.json());
app.use('/slots', Slot)
app.use('/appointments', Appointment)


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`App is listenting on Port: ${PORT}`)
})
