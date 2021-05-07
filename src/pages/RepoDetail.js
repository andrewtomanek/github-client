import React, { useEffect } from "react";
import { useParams } from "react-router";
import { connect } from "react-redux";
import RepoCard from "../components/RepoCard";
import { PageLayout } from "../styles/elements";

const RepoDetail = (props) => {
  let { repoName } = useParams();

  useEffect(() => {
    if (props.user.user) {
      props.user.user &&
        props.loadSingleRepo({ userName: props.user.user.login, repoName });
    } else {
      props.history.push("/");
    }
  }, [props, repoName]);

  return (
    <PageLayout>
      {props.user.repo && <RepoCard repo={props.user.repo} />}
    </PageLayout>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loadSingleRepo: (repoIdArray) => dispatch.user.loadSingleRepo(repoIdArray),
});

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(RepoDetail);
