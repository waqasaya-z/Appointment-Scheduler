import React, { useState ,useEffect } from "react";
import axios from 'axios'
import Navbar from "./Navbar";

const BookedAppointment = () => {
  const [datas, setDatas] = useState();

  useEffect(() => {
    const res = axios.get("http:localhost:3000/appointment");
    const data = res.data;
    setDatas(data);
  }, []);

  return (
    <div>
      <Navbar />
      <h1> Booked Appointments </h1>
      {/* {datas.map((data, index) => {
        <div key={index}>
         <h1> {data.name} </h1> 
          <h1> {data.email} </h1> 
        </div>;
      })} */}
    </div>
  );
};

export default BookedAppointment;
