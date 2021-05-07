import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  BasicButton,
  FormContainer,
  InputBox,
  BasicText,
} from "../styles/elements";
import styled from "styled-components";

const FilterForm = ({ filterByQuery }) => {
  return (
    <Formik
      initialValues={{ name: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        filterByQuery(values);
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string()
          .required("Alphanumeric characters required")
          .matches(
            /^[0-9a-zA-Z]+$/,
            "Please input alphanumeric characters only"
          ),
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
          <FormContainer>
            <InputGroup onSubmit={handleSubmit}>
              <SearchButton type="submit" disabled={isSubmitting}>
                Filter repos
              </SearchButton>
              <input
                id="name"
                placeholder="Filter by name"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.name && touched.name ? "error" : ""}
              />
              <ResetButton
                type="button"
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
              >
                Reset
              </ResetButton>
            </InputGroup>
            <ErrorText> {errors.name ? errors.name : "\u{2714}"}</ErrorText>
          </FormContainer>
        );
      }}
    </Formik>
  );
};

export default FilterForm;

const SearchButton = styled(BasicButton)`
  font-size: 1.2rem;
  border: solid 0.1rem white;
  border-radius: 0.3rem;
  color: #fff;
  background-color: var(--green);
`;

const ResetButton = styled(BasicButton)`
  font-size: 1.2rem;
  border: solid 0.1rem white;
  border-radius: 0.3rem;
  color: #fff;
  background-color: var(--red);
`;

const ErrorText = styled(BasicText)`
  text-align: center;
  color: var(--red);
  height: 100%;
`;

const InputGroup = styled(InputBox)`
  justify-items: center;
  min-width: 40vw;
`;
