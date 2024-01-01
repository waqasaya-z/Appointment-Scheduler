import { Formik } from "formik";
import React from "react";
import FormikForm from "./Form";
import AvailableSlot from "./AvailableSlot";
import Navbar from "./Navbar";

const CreateSlot = () => {
  return (
    <div className="flex ">
      <Navbar />
      <div className="d-flex flex-column mb-3">
        <h1> Create Time Slot </h1>
        <FormikForm />
      </div>
    </div>
  );
};

export default CreateSlot;
