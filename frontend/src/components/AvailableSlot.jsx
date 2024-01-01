import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const AvailableSlot = () => {
  const [slots, setSlots] = useState();
  useEffect(() => {
    const res = axios.get("http://localhost:3000/slots");
    setSlots(res);
  }, []);

  return (
    <>
    <Navbar />
      <h1> Available Time Slot </h1>
      {/* {
        slots.map((slot,index) => {
         <div key={index}>
         {slot.StartTime} {slot.EndTime} <button> Book </button>
         </div>
        })
      } */}
    </>
  );
};

export default AvailableSlot;
