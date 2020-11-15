//Formik is a small group of React components and hooks for building forms in React and React Native. It helps with the three most parts:
// Getting values in and out of form state
// Validation and error messages
// Handling form submission
//  cdm: npm i formik
import React from 'react';
import ReactDOM from 'react-dom';
import {useFormik} from 'formik';

// This function receives employee object as input data
const validateEmployee = empData => {
 // object which will return error messages
  const errors = {};
  // if the error is in the name
  if (!empData.Name) {
    errors.Name = 'Please Enter Employee Name';
  } else if (empData.Name.length > 20) {
    errors.Name = 'Name cannot exceed 20 characters';
  }

  if (!empData.Location) {
    errors.Location = 'Please Enter Employee Location';
  } 
  // regular expression validation to check the Email ID format.
  if (!empData.EmailId) {
    errors.EmailId = 'Please Enter Email ID';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(empData.EmailId)) {
    errors.EmailId = 'Invalid email address';
  }

  return errors;
};
const EmployeeComponent=()=>{
  // seFormik function, pass an object which contains initial values for Id, Name, Location and Salary.
  const formik=useFormik({
    initialValues:{
      Id:'',
      Name:'',
      Location:'',
      Salary:'',
      EmailId:''
    },
    validate:validateEmployee,
    // pass a onSubmit function () to the useFormik(). In this function, we will display the forms of current values using an alert.
    onSubmit:values=>{
      alert(JSON.stringify(values));
    }
  });

  // return the div container in which we will place our form tag.lets pass formik. handleSubmit to the onSubmit attribute of the forms.
  return (
    <div>
      <h2>New Employee Form...</h2>
      
  <form onSubmit={formik.handleSubmit}>
        <p>
          <label htmlFor="Id">Employee ID : </label>
          <input type="text" name="Id" id="Id" value={formik.values.Id}
                  onChange={formik.handleChange}></input>  
        </p>
        <p>
           <label htmlFor="Name">Employee Name : </label>
           <input type="text" name="Name" id="Name" value={formik.values.Name}
                  onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                  {formik.touched.Name && formik.errors.Name ? <span style={{color:'red'}}>{formik.errors.Name}</span> : null}
                  
         </p>
         <p>
           <label htmlFor="Location">Employee Location : </label>
           <input type="text" name="Location" id="Location" value={formik.values.Location}
                  onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                  {formik.touched.Location && formik.errors.Location ? <span style={{color:'red'}}>{formik.errors.Location}</span> : null}
                 
         </p>
         <p>
           <label htmlFor="Salary">Employee Salary : </label>
           <input type="text" name="Salary" id="Salary" value={formik.values.Salary}
                  onChange={formik.handleChange}></input>                  
         </p>
         <p>
           <label htmlFor="EmailId">Employee Email ID : </label>
           <input type="text" name="EmailId" id="EmailId" value={formik.values.EmailId}
                  onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                  {formik.touched.EmailId && formik.errors.EmailId ? <span style={{color:'red'}}>{formik.errors.EmailId}</span> : null}
                 
         </p>
         <button type="submit">Create</button>
  </form>
    </div> 
  )
}

const element=<EmployeeComponent></EmployeeComponent>

ReactDOM.render(element,document.getElementById("root"));
