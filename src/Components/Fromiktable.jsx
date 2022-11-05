import { Formik, Form, Field, FieldArray , ErrorMessage} from "formik";
import React from "react";
import "./fromiktable.css";
import * as yup from "yup";
const validationSchema =yup.object({
  name:yup.string().required("Name is Required"),
  number: yup.number()
  .typeError("That doesn't look like a phone number")
  .positive("A phone number can't start with a minus")
  .integer("A phone number can't include a decimal point")
  .min(8)
  .required('A phone number is required'),
  password: yup.string().required("Password is Raequired"),
  gender:yup.string().required("Gender is Required"),
  date:yup.date().required("Date is Required"),
  selection: yup.string().required("Selection is Required"),
  textarea: yup.string().min(10,"This is too short").max(300,"This is too long string identity").required("Textarea is Required"),
  socials: yup.array().of(yup.string().required("Socials is Required").min(1,"Atleast one fireld is required")),
  hobbies: yup.array().of(yup.string().required("Hobbies is Required").min(1,"Atleast one fireld is required")),

})
const Fromiktable = () => {
  return (
    <>
      <Formik
      validationSchema={validationSchema}
        initialValues={{
          name: "",
          number: "",
          password: "",
          gender: "",
          date: "",
          selection: "",
          textarea: "",
          socials: [],
          hobbies: [],
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        >
        {({values})=>(
          <Form>
          <label htmlFor="">Name:</label>
          <Field name="name" type="text" />
          <br />
          <label htmlFor="" className="name-first"><ErrorMessage name="name"/></label>
          <br />
          <br />
          <label htmlFor="">Number</label>
          <Field name="number" type="number" />
          <br />
          <label htmlFor="" className="name-first"><ErrorMessage name="number"/></label>
          <br />
          <br />
          <label htmlFor="">Password</label>
          <Field name="password" type="password" />
          <br />
          <label htmlFor="" className="name-first"><ErrorMessage name="password"/></label>
          <br />
          <br />
          <label htmlFor="" name="gender">GENDER: </label>
          <label htmlFor=""> Male</label>
          <Field name="gender" type="radio" value="Male" />
          <label htmlFor=""> Female</label>
          <Field name="gender" type="radio" value="Female" />
          <br />
          <label htmlFor="" className="name-first"><ErrorMessage name="gender"/></label>
          <br />
          <br />
          <label htmlFor="">Date</label>
          <Field name="date" type="date" />
          <br />
          <label htmlFor="" className="name-first"><ErrorMessage name="date"/></label>
          <br />
          <br />
          <Field name="selection" as="select">
            <option value="10">Selection one</option>
            <option value="100">Selection two</option>
            <option value="1000">Selection three</option>
          </Field>
          <br />
          <label htmlFor="" className="name-first"><ErrorMessage name="selection"/></label>
          <br />
          <br />
          <Field name="textarea" as="textarea" />
          <br />
          <label htmlFor="" className="name-first"><ErrorMessage name="textarea"/></label>
          <br />
          <br />
          <label htmlFor="" name="socials">Socials</label>
          <br />
          <br />
          <label htmlFor="">Facebook</label>
          <Field name="socials[0]" />
          <br />
          <label htmlFor="" className="name-first"><ErrorMessage name="socials.0"/></label>
          <br />
          <br />
          <label htmlFor="" >Twitter</label>
          <Field name="socials[1]"/>
          <br />
          <label htmlFor="" className="name-first"><ErrorMessage name="socials.1"/></label>
          <br />
          <label htmlFor="" className="name-first"><ErrorMessage name="socials"/></label>
          <br />
          <br />
          <FieldArray
            name="hobbies"
            render={(arrayHelpers) => (
              <div>
                {values.hobbies && values.hobbies.length > 0 ? (
                  values.hobbies.map((hobby, index) => (
                    <div key={index}>
                      <Field name={`hobbies.${index}`} />
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)}
                      >
                        -
                      </button>
                      <button
                        type="button"
                        onClick={() => arrayHelpers.insert(index, "")}
                      >
                        +
                      </button>
                      <br />
                      <label htmlFor="" className="name-first"><ErrorMessage name="hobbies"/></label>
                    </div>
                  ))
                ) : (
                  <button type="button" onClick={() => arrayHelpers.push("")}>
                    Add a friend
                  </button>
                )}
              </div>
            )}
          />

          <br />
          <br />
          <button type="submit">Submit</button>
        </Form>
        )}
      </Formik>
    </>
  );
};

export default Fromiktable;
