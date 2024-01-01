import { Field, Form, Formik, ErrorMessage } from 'formik'
import React from 'react'
import axios from 'axios'

const FormikForm = () => {
  
  return (
   <>
       <Formik
       initialValues={{ StartTime: '', EndTime: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={ async (values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
        const res = axios.post("http:localhost:3000/slots", values)
        console.log(res);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
            <label htmlFor='StartTime'> Start Time </label>
           <Field type="name" name="StartTime" id="StartTime" />
           <ErrorMessage name="email" component="div" />
           <label htmlFor='EndTime'> End Time </label>
           <Field type="name" name="EndTime" id="EndTime" />
           <ErrorMessage name="password" component="div" />
           <button className='btn btn-primary m-4' type="submit" disabled={isSubmitting}>
             Create Slot
           </button>
         </Form>
       )}
     </Formik>

   </>
    )
}

export default FormikForm