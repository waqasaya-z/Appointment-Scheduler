import React from "react";
import BookForm from "./BookForm";
import BookedAppointment from "./BookedAppointment";
import Navbar from "./Navbar";

const BookSlot = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h1> Book Time Slot </h1>
        <BookForm />
      </div>
    </div>
  );
};

export default BookSlot;
