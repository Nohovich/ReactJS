//Formik is a small group of React components and hooks for building forms in React and React Native. It helps with the three most parts:
// Getting values in and out of form state
// Validation and error messages
// Handling form submission
//  cdm: npm i formik
// cmd : npm install yup
import React from "react";

import ReactDOM from "react-dom";

import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";

import * as yup from "yup";

const EmployeeComponent = () => {
  return (
    <Formik
      initialValues={{
        Id: "",

        Name: "",

        Location: "",

        Salary: "",

        EmailId: "",

        Designation: "",
      }}
      //  property called as validationSchema in useFormik
    // To this function, we pass our validation rules
      validationSchema={yup.object({
        // name rules
        Name: yup
          .string()
          .max(20, "Name should not exceed 20 Characters")
          .required("Please Enter Employee Name"),

        Location: yup
          .string()

          .required("Please Enter Employee Location"),

        EmailId: yup
          .string()

          .email("Invalid email address")

          .required("Please Enter Email Id"),
      })}
      onSubmit={(values) => {
        alert(JSON.stringify(values));
      }}
    >
      {(props) => (
        <div>
          <h2>Enter Employee Details...</h2>

          <Form>
            <p>
              <label htmlFor="Id">Employee ID </label>

              <Field name="Id" type="text"></Field>
            </p>

            <p>
              <label htmlFor="Name">Employee Name </label>

              <Field name="Name" type="text"></Field>

              <ErrorMessage name="Name"></ErrorMessage>
            </p>

            <p>
              <label htmlFor="Location">Employee Location </label>

              <Field name="Location" type="text"></Field>

              <ErrorMessage name="Location"></ErrorMessage>
            </p>

            <p>
              <label htmlFor="Salary">Employee Salary </label>

              <Field name="Salary" type="text"></Field>
            </p>

            <p>
              <label htmlFor="EmailId">Employee Email ID </label>

              <Field name="EmailId" type="text"></Field>

              <ErrorMessage name="EmailId"></ErrorMessage>
            </p>

            <p>
              <label>
                Employee Designation :
                <Field name="Designation" as="select">
                  <option value="red">Software Engineer</option>

                  <option value="green">Senior Software Engineer</option>

                  <option value="blue">Lead</option>
                </Field>
              </label>
            </p>
            <button type="submit" disabled={props.isValid == false}>
              Submit
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

const element = <EmployeeComponent></EmployeeComponent>;

ReactDOM.render(element, document.getElementById("root"));
