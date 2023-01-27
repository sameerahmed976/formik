import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};
const onSubmit = (values) => console.log(values);

// const validate = (values) => {
//   let errors = {};

//   if (!values.name) {
//     errors.name = "Required";
//   }
//   if (!values.email) {
//     errors.email = "Required";
//   } else if (
//     !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
//       values.email
//     )
//   ) {
//     errors.email = "Invalid email format";
//   }
//   if (!values.channel) {
//     errors.channel = "Required";
//   }

//   return errors;
// };

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required"),
});

const Form = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    // validate,
  });
  // console.log(`* ~ file: Form.jsx:6 ~ Form ~ formik`, formik);

  return (
    <>
      <form className="form" onSubmit={formik.handleSubmit}>
        <div className="form__control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form__input"
            autoComplete="off"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <div className="error">
            {formik.touched.name && formik.errors?.name}
          </div>
        </div>
        <div className="form__control">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form__input"
            autoComplete="off"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <div className="error">
            {formik.touched.email && formik.errors?.email}
          </div>
        </div>
        <div className="form__control">
          <label htmlFor="channel">Channel</label>
          <input
            type="channel"
            name="channel"
            id="channel"
            className="form__input"
            autoComplete="off"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.channel}
          />
          <div className="error">
            {formik.touched.channel && formik.errors?.channel}
          </div>
        </div>
        <button className="btn btn__submit" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
