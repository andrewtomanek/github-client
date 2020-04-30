import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { 
  BasicButton,
  InputBox,
  InputLabel,
} from "../styles/elements";
import styled from "styled-components";

const Form = (props) => {
  return (
      <Formik
        initialValues={{ name: "" }}
        onSubmit={(values, { setSubmitting }) => {
          props.loadUserData(values.name);
          setSubmitting(false);
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("Required"),
        })}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          } = props;
          return (
            <InputGroup onSubmit={handleSubmit}>
              <InputLabel htmlFor="name">
                <b>GitHub Name</b>
              </InputLabel>
              <input
                id="name"
                placeholder="Enter your username"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.name && touched.name ? "error" : ""}
              />
              {errors.name && errors.touched && (
                <div className="input-feedback">{errors.name}</div>
              )}
              <SearchButton type="submit" disabled={isSubmitting}>
                Submit
              </SearchButton>
              <ResetButton
                type="button"
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
              >
                Reset
              </ResetButton>
            </InputGroup>
          );
        }}
      </Formik>
  );
};



const mapDispatchToProps = (dispatch) => ({
  loadUserData: (name) => dispatch.user.loadUserData(name),
});

export default connect(null, mapDispatchToProps)(Form);

const SearchButton = styled(BasicButton)`
  border: solid 0.1rem white;
  border-radius: 0.1rem 0.1rem;
  color: #fff;
  background-color: var(--green);
`;

const ResetButton = styled(BasicButton)`
  border: solid 0.1rem white;
  border-radius: 0.1rem 0.1rem;
  color: #fff;
  background-color: var(--red);
`;

const InputGroup = styled(InputBox)`
  background-color: var(--grey);
`;
