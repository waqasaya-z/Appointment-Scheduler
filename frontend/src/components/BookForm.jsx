import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

const BookForm = () => {
  const [booking, setBooking] = useState();

  useEffect(() => {
    axios.post("http://localhost:3000/appointments", booking);
  }, []);

  return (
    <>
      <Formik
        initialValues={{ name: "", email: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setBooking(values);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="name"> Name </label>
            <Field type="name" name="name" id="name" />
            <ErrorMessage name="name" component="div" />
            <label htmlFor="email"> Email </label>
            <Field type="email" name="email" id="email" />
            <ErrorMessage name="email" component="div" />
            <button className="btn btn-primary m-3" type="submit" disabled={isSubmitting}>
              Book Time Slot
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default BookForm;
