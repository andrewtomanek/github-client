import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  BasicButton,
  InputBox,
  InputLabel,
  BasicHeading,
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
          <InputGroup onSubmit={handleSubmit}>
            <InputLabel htmlFor="name">
              <BasicHeading>Search GitHub Name</BasicHeading>
            </InputLabel>
            <input
              id="name"
              placeholder="Filter by name"
              type="text"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.name && touched.name ? "error" : ""}
            />
            <ErrorText> {errors.name ? errors.name : "\u{2714}"}</ErrorText>
            <SearchButton type="submit" disabled={isSubmitting}>
              Filter repos
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

export default FilterForm;

const SearchButton = styled(BasicButton)`
  border: solid 0.1rem white;
  border-radius: 0.3rem;
  color: #fff;
  background-color: var(--green);
`;

const ResetButton = styled(BasicButton)`
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
  background-color: var(--grey);
  justify-items: center;
  min-width: 40vw;
`;