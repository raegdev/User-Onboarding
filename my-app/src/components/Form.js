import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function OnboardingForm() {
    return (
      <Form>
        <Field type='name' name='name' placeholder='Name' />  
        <Field type="email" name="email" placeholder="Email" />
        <Field type="password" name="password" placeholder="Password" />
        <Field type='checkbox' name='TOS' />
        <input type='submit'/>
      </Form>
    );
  }
  
  const FormikOnboardingForm = withFormik({
    mapPropsToValues({ name, email, password, terms }) {
      return {
        name: name || '',
        email: email || "",
        password: password || "",
        terms: terms || false
      };
    },
  
    handleSubmit(values) {
      console.log(values);
      //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
    }
  })(OnboardingForm);
  
  export default FormikOnboardingForm;

