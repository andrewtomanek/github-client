import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  BasicButton,
  FormContainer,
  InputBox,
  BasicText,
} from "../styles/elements";
import styled, { css } from "styled-components";

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
          <FilterContainer>
            <InputGroup onSubmit={handleSubmit}>
              <SearchButton type="submit" disabled={isSubmitting}>
                Filter repos
              </SearchButton>
              <FilterInput
                id="name"
                placeholder="Filter by name"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                inputErrors={errors.name && touched.name}
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
          </FilterContainer>
        );
      }}
    </Formik>
  );
};

export default FilterForm;

const FilterInput = styled.input`
  color: var(--dark);
  font-size: 1.2rem;
  margin: 0rem;
  padding: 0.3rem 0.6rem;
  border: 0.2rem solid transparent;
  border-radius: 0.3rem;
  font-weight: 700;

  @media all and (max-width: 736px) {
    input {
      font-size: 1.5rem;
    }
  }

  @media all and (max-width: 480px) {
    input {
      font-size: 1.8rem;
    }
  }
  ${({ inputErrors }) =>
    inputErrors &&
    css`
      color: red;
      border-color: var(--red);
      background-color: #ffc9aa;
    `}
`;

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
`;

const InputGroup = styled(InputBox)`
  justify-items: center;
  min-width: 40vw;
`;

const FilterContainer = styled(FormContainer)`
  border: none;
`;
