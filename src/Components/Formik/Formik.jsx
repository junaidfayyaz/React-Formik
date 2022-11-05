import React from "react";
import { Formik, Form, Field, ErrorMessage, getIn } from "formik";
import "./Formik.css";
import * as yup from "yup";

// input Field error
function getStyles(errors, fieldName) {
  if (getIn(errors, fieldName)) {
    return {
      // border: '1px solid red',
      transition:'all 0.5'
    }
  }
}

function CustomInput({ field, form: { errors } }) {

  return <div>
  <input {...field} style={getStyles(errors, field.name)} className="form-control" />
  {/* <ErrorMessage name={field.name} /> */}
  </div>
}
// inout f


const validationSchema = yup.object({
  name: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Field is Required"),
  number: yup
    .number()
    .min(2, "Confirm Your Number")
    .max(12345678912, "Number is Invaliud")
    .required("Field is Required"),
  email: yup.string().email("invalid email address").required("Field is Required"),
  password: yup.string().required("This field is required"),
  confirm: yup.string().required("This field is required").when("password", {
    is: val => (val && val.length > 0 ? true : false),
    then: yup.string().oneOf(
      [yup.ref("password")],
      "Both password need to be the same"
    )
  }),
  gender: yup.string().required("Field is Required"),
  textarea: yup.string().min(10,"This is too short").max(300,"This is too long string identity").required("Textarea is Required"),
  choose: yup.string().required("Field is Required"),
  checkone: yup.string().required("Field is Required"),
  checktwo: yup.array().required("Field is Required"),

});
const ReactFormik = () => {
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  return (
    <div>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          name: "",
          number: "",
          email: "",
          password: "",
          confirm: "",
          gender: "",
          textarea:"",
          choose:"",
          checkone:"",
          checktwo:"",
        }}
        onSubmit={(values,action) => {
          console.log(values);
          action.resetForm()
          
        }}

      >
        {({values,handleSubmit,isSubmitting,errors,touched,handleChange,
         handleBlur, })=>(
          <Form onSubmit={handleSubmit}>
          <label>Name:</label>
          <Field
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter Your Name"
            component={CustomInput}
          />
          <br />
          <label htmlFor="name" className="error">
            <ErrorMessage name="name" />
          </label>
          <label>Number:</label>
          <Field
            type="number"
            name="number"
            className="form-control"
            placeholder="Enter Your Number"
            component={CustomInput}
          />
          <br />
          <label htmlFor="number" className="error">
            <ErrorMessage name="number" />
          </label>
          <label>Email:</label>
          {errors.email && touched.email }
          <Field
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter Your Email"
            onChange={handleChange}
            onBlur={handleBlur}
            validate={validateEmail} 
            component={CustomInput}
          />
          <br />
          <label htmlFor="email" className="error">
            <ErrorMessage name="email" />
          </label>
          <label>Password:</label>
          <Field
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter Your Password"
            // component={CustomInput}
          />
          <br />
          <label htmlFor="password" className="error">
            <ErrorMessage name="password" />
          </label>
          <label>Confirm Password:</label>
          <Field
            type="password"
            name="confirm"
            className="form-control"
            placeholder="Enter Your Confirm Password"
            // component={CustomInput}
          />
          <br />
          <label htmlFor="confirm" className="error">
            <ErrorMessage name="confirm" />
          </label>
          <label htmlFor="" name="checkone">Select Your Religion </label>
          <label htmlFor=""> Muslim <Field name="checkone" type="radio" value="Musim" /></label>
          <label htmlFor=""> Non-Musim <Field name="checkone" type="radio" value=" Non-Musim" /></label>
          <label htmlFor="" className="error"><ErrorMessage name="checkone"/></label>
          <br />
          <div>
            <Field component="select" name="gender" placeholder="Select Your Gender" className="gender" >
              <option value="" disabled className="form-control">Select Your Gender</option>
              <option value="Male" className="form-control">Male</option>
              <option value="Female" className="form-control">Female</option>
            </Field>
            <br />
          <label htmlFor="gender" className="error">
            <ErrorMessage name="gender" />
          </label>
          </div>
          <br />
          <label htmlFor="textarea">Text-Area</label>
          <Field name="textarea" as="textarea"/>
          <br />
          <label htmlFor="" className="error"><ErrorMessage name="textarea"/></label>
          <div>
            <Field component="select" name="choose" placeholder="Select Your Gender" className="gender">
              <option value="" disabled className="form-control">Choose a Car</option>
              <option value="BMW" className="form-control">BMW</option>
              <option value="Audi" className="form-control">Audi</option>
            </Field>
            <br />
          <label htmlFor="choose" className="error">
            <ErrorMessage name="choose" />
          </label>
          <br />
          </div>
          <label htmlFor="textarea">Text-Area</label>
          <Field name="textarea" as="textarea"/>
          <br />
          <label htmlFor="" className="error"><ErrorMessage name="textarea"/></label>
          <br />
          <label htmlFor="" name="checktwo">Select Your Favourite Color</label>
          <label htmlFor=""> Red <Field name="checktwo" type="checkbox" value="red" /></label>
          <label htmlFor=""> Green <Field name="checktwo" type="checkbox" value="green" /></label>
          <label htmlFor=""> Blue <Field name="checktwo" type="checkbox" value="blue" /></label>
          <br />
          <label htmlFor="" className="error"><ErrorMessage name="checktwo"/></label>
          <br />
          <button type="submit"  disabled={isSubmitting}>Submit</button>
        </Form>
        )}
      </Formik>
    </div>
  );
};

export default ReactFormik;
