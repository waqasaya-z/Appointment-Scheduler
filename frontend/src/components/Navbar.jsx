import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link to='/' class="navbar-brand" href="#">Appointment Scheduler </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to='/create' class="nav-link" aria-current="page" href="#">Create Slot</Link>
        </li>
        <li class="nav-item">
          <Link to='/available' class="nav-link ">Available Slots</Link>
        </li>
        <li class="nav-item">
          <Link to="/booking" class="nav-link" href="#">Booking</Link>
        </li>
        <li class="nav-item">
          <Link to='/appointment' class="nav-link" href="#">Booked Appointments</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar