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

  const getRepo = async () => {
    const repoUrl = `https://api.github.com/repos/${props.user.user.login}/${repoName}`;

    try {
      let repoDataResponse = await axios.get(repoUrl);
      let repoDetail = repoDataResponse.data;
      setRepoData(repoDetail);
    } catch (error) {
      setErrorMessage(error.response.statusText);
    }
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
