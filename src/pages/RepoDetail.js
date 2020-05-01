import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { connect } from "react-redux";
import RepoCard from "../components/RepoCard";
import { PageLayout, BasicText } from "../styles/elements";

const RepoDetail = (props) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [repoData, setRepoData] = useState([]);
  let { repoName } = useParams();

  useEffect(() => {
    if (props.user.user) {
      props.user.user && getRepo();
    } else {
      props.history.push("/");
    }
  }, []);

  const getRepo = (e) => {
    const repoUrl = `https://api.github.com/repos/${props.user.user.login}/${repoName}`;
    axios
      .get(repoUrl)
      .then((responses) => {
        const repo = responses.data;
        setRepoData(repo);
      })
      .catch((error) => {
        setErrorMessage(error.response.statusText);
      });
  };

  return (
    <PageLayout>
      {errorMessage && <BasicText>{errorMessage}</BasicText>}
      <RepoCard repo={repoData} />
    </PageLayout>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(RepoDetail);
