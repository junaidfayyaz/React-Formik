import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import * as yup from "yup";
import "./UIFormik.css";
const UIFormik = () => {
  const validationSchema = yup.object({
    first: yup
      .string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Field is Required"),
    last: yup
      .string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Field is Required"),
    email: yup
      .string()
      .email("invalid email address")
      .required("Field is Required"),
    number: yup
      .number()
      .min(2, "Confirm Your Number")
      .max(12345678912, "Number is Invaliud")
      .required("Field is Required"),
    password: yup.string().required("Field is required"),
    confirm: yup
      .string()
      .required("Field is required")
      .when("password", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: yup
          .string()
          .oneOf([yup.ref("password")], "Both password need to be the same"),
      }),
    gender: yup.string().required("Field is Required"),
    country: yup.string().required("Field is Required"),
    textareaone: yup
      .string()
      .min(10, "This is too short")
      .max(300, "This is too long string identity")
      .required("Textarea is Required"),
    textareatwo: yup
      .string()
      .min(10, "This is too short")
      .max(300, "This is too long string identity")
      .required("Textarea is Required"),
    checkone: yup.string().required("Field is Required"),
    checktwo: yup.array().required("Field is Required"),
  });
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        first: "",
        last: "",
        email: "",
        number: "",
        password: "",
        confirm: "",
        gender: "",
        country: "",
        textareaone: "",
        textareatwo: "",
        checkone: "",
        checktwo: "",
      }}
    //   onSubmit={(values,action) => {
    //     console.log(values);
    //     action.resetForm();
    //   }}

      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values,handleSubmit,errors,touched,isSubmitting,}) => (
        <div className="bg-img">
          <div className="top">
            <section id="join-now-section">
              <div className="holder">
                <div className="join-form-holder">
                  <h2>
                    <span className="ilinkedon-logo-medium"></span>
                    <span>-Be Great at what you do</span>
                  </h2>
                  <h3>React Formik.</h3>
                  <Form className="join-form" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="columns-row">
                        <div className="row">
                          <div className="columns">
                            <span className="fname">
                              <Field
                                className="input-field"
                                placeholder="First Name"
                                name="first"
                                id="fname"
                                type="text"
                              />
                              
                              <label htmlFor="name" className="err">
                              {errors.first && touched.first }
                                <ErrorMessage name="first" />
                              </label>
                            </span>
                          </div>
                          <div className="columns">
                            <span className="lname">
                              <Field
                                className="input-field"
                                placeholder="Last Name"
                                name="last"
                                id="lname"
                                type="text"
                              />
                              <label htmlFor="name" className="err">
                                <ErrorMessage name="last" />
                              </label>
                            </span>
                          </div>
                        </div>

                        <div className="row">
                          <div className="columns">
                            <span className="email">
                              <Field
                                className="input-field"
                                placeholder="Email"
                                type="email"
                                id="email"
                                name="email"
                              />
                              <label htmlFor="name" className="err">
                                <ErrorMessage name="email" />
                              </label>
                            </span>
                          </div>
                          <div className="columns">
                            <span className="phone">
                              <Field
                                className="input-field"
                                placeholder="Phone"
                                id="phone"
                                type="number"
                                name="number"
                              />
                              <label htmlFor="name" className="err">
                                <ErrorMessage name="number" />
                              </label>
                            </span>
                          </div>
                        </div>

                        <div className="row">
                          <div className="columns">
                            <span className="password">
                              <Field
                                className="input-field"
                                placeholder="Password"
                                // id="password"
                                type="password"
                                name="password"
                              />
                              <label htmlFor="name" className="err">
                                <ErrorMessage name="password" />
                              </label>
                            </span>
                          </div>
                          <div className="columns">
                            <span className="confirm-password">
                              <Field
                                className="input-field"
                                placeholder="Re-Enter Password"
                                // id="confirm-password"
                                type="password"
                                name="confirm"
                              />
                              <label htmlFor="name" className="err">
                                <ErrorMessage name="confirm" />
                              </label>
                            </span>
                          </div>
                        </div>

                        <div className="row">
                          <div className="columns">
                            <span className="email">
                              <Field
                                component="select"
                                name="gender"
                                placeholder="Select Your Gender"
                                className="gender"
                              >
                                <option
                                  value=""
                                  disabled
                                  className="form-control"
                                >
                                  Select Your Gender
                                </option>
                                <option value="Male" className="form-control">
                                  Male
                                </option>
                                <option value="Female" className="form-control">
                                  Female
                                </option>
                              </Field>
                              <label htmlFor="name" className="err">
                                <ErrorMessage name="gender" />
                              </label>
                            </span>
                          </div>
                          <div className="columns">
                            <span className="phone">
                              <Field
                                component="select"
                                name="country"
                                placeholder="Select Your Country"
                                className="gender"
                              >
                                <option
                                  value=""
                                  disabled
                                  className="form-control"
                                >
                                  Select Your Country
                                </option>
                                <option value="Male" className="form-control">
                                  Pakistan
                                </option>
                                <option value="Female" className="form-control">
                                  Saudia-Arabia
                                </option>
                              </Field>
                              <label htmlFor="name" className="err">
                                <ErrorMessage name="country" />
                              </label>
                            </span>
                          </div>
                        </div>

                        <div className="row">
                          <div className="columns">
                            <span className="password">
                              <Field
                                as="textarea"
                                className="input-field"
                                placeholder="Text-Area"
                                id="password"
                                type="textarea"
                                name="textareaone"
                              />
                              <label htmlFor="name" className="err">
                                <ErrorMessage name="textareaone" />
                              </label>
                            </span>
                          </div>
                          <div className="columns">
                            <span className="confirm-password">
                              <Field
                                as="textarea"
                                className="input-field"
                                placeholder="Text-Area"
                                id="confirm-password"
                                type="textarea"
                                name="textareatwo"
                              />
                              <label htmlFor="name" className="err">
                                <ErrorMessage name="textareatwo" />
                              </label>
                            </span>
                          </div>
                        </div>

                        <div className="main-religion">
                          <label htmlFor="" name="checkone" className="reli">
                            Select Your Religion
                          </label>
                          <br />
                          <label htmlFor="" className="religion">
                            {" "}
                            <Field
                              name="checkone"
                              type="radio"
                              value="Musim"
                            />{" "}
                            Muslim
                          </label>
                          &nbsp;&nbsp;
                          <label htmlFor="" className="religion">
                            {" "}
                            <Field
                              name="checkone"
                              type="radio"
                              value=" Non-Musim"
                            />
                            Non-Musim
                          </label>
                          <label htmlFor="" className="error-check">
                            <ErrorMessage name="checkone" />
                          </label>
                        </div>

                        <div>
                          <label htmlFor="" name="checktwo" className="color">
                            Select Your Favourite Color
                          </label>
                          <br />
                          <label htmlFor="" className="color-c">
                            <Field
                              name="checktwo"
                              type="checkbox"
                              value="red"
                            />
                            Red
                          </label>
                          &nbsp;&nbsp;
                          <label htmlFor="" className="color-c">
                            <Field
                              name="checktwo"
                              type="checkbox"
                              value="green"
                            />
                            Green
                          </label>
                          &nbsp;&nbsp;
                          <label htmlFor="" className="color-c">
                            <Field
                              name="checktwo"
                              type="checkbox"
                              value="blue"
                            />
                            Blue
                          </label>
                          <label htmlFor="" className="error-checktwo">
                            <ErrorMessage name="checktwo" />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <button type="submit" disabled={isSubmitting}>Submit</button>
                    </div>
                  </Form>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default UIFormik;
