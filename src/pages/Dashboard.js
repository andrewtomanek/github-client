import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import "./dashboard.css";
import * as Yup from "yup";
import { connect } from "react-redux";

const Dashboard = (props) => {
  const userData = props.user.user;
  return (
    <div>
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
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">
                <b>GitHub Name</b>
              </label>
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
              <button
                type="button"
                className="outline"
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
              >
                Reset
              </button>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          );
        }}
      </Formik>
      {userData && (
        <div className="output">
          {JSON.stringify(props.user, null, 2)}
          <React.Fragment>
            <li>
              <div>
                <p>Name: {userData.login}</p>
                <p>Bio: {userData.bio}</p>
                <p>Repos: {userData.public_repos}</p>
                {userData.repos_url && <Link to="/repo">Display repos</Link>}
                <p>ReposUrl: {userData.repos_url}</p>
                <p>Name: {userData.avatar_url}</p>
                <img src={userData.avatar_url} alt={userData.avatar_url} />
              </div>
            </li>
          </React.Fragment>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  loadUserData: (name) => dispatch.user.loadUserData(name),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
