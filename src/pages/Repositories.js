import React, { useState, useEffect } from "react";
import Repository from "../components/Repository";
import FilterForm from "../components/FilterForm";
import { connect } from "react-redux";
import { PageLayout, StyledLink, BasicHeading } from "../styles/elements";
import styled from "styled-components";

const Repositories = (props) => {
  const [reposArray, setReposArray] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (props.user.user) {
      props.user.user && getRepos();
    } else {
      props.history.push("/");
    }
  }, []);

  useEffect(() => {
    props.user.repositories && setReposArray(props.user.repositories);
  }, [props.user.repositories]);

  const toggleCheckboxChange = (event) => {
    setIsChecked(!isChecked);
    displayRepos();
  };

  const filterByQuery = (queryObject) => {
    filterRepos(queryObject.name);
  };

  const getRepos = async () => {
    props.loadUserRepos(props.user.user.repos_url);
  };

  const filterRepos = (queryString) => {
    let filteredRepos;
    filteredRepos = reposArray.filter((a) => a.name === queryString);
    setReposArray(filteredRepos);
  };

  const displayRepos = () => {
    let sortedLowStars = [...reposArray];
    sortedLowStars.sort((a, b) =>
      a.stargazers_count > b.stargazers_count ? 1 : -1
    );
    let sortedHighStars = [...reposArray];
    sortedHighStars.sort((a, b) =>
      a.stargazers_count < b.stargazers_count ? 1 : -1
    );
    if (!isChecked) {
      setReposArray(sortedHighStars);
    } else {
      setReposArray(sortedLowStars);
    }
  };

  return (
    <PageLayout>
      <InputGroup>
        <FilterForm filterByQuery={filterByQuery} />
        <BasicHeading>Sort by Stargazers count</BasicHeading>
        <InputCheckBox
          type="checkbox"
          value={isChecked}
          onChange={toggleCheckboxChange}
        />
        <StyledLink to={`/`}>New search</StyledLink>
      </InputGroup>
      {reposArray.length > 0 && (
        <RepoList>
          {reposArray.map((repo) => (
            <Repository key={repo.name} repo={repo} />
          ))}
        </RepoList>
      )}
      {reposArray.length === 0 && <BasicHeading>No results found</BasicHeading>}
    </PageLayout>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loadUserRepos: (allReposUrl) => dispatch.user.loadUserRepos(allReposUrl),
});

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(Repositories);

const RepoList = styled.ul`
  display: grid;
  grid-gap: 1rem;
  grid-auto-flow: row;
  justify-items: center;
  align-items: center;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const InputGroup = styled.section`
  display: grid;
  grid-auto-flow: row;
  align-items: center;
  align-content: space-around;
  justify-content: center;
  grid-gap: 1rem;
  padding: 1rem 0.5rem;
  background-color: var(--grey);
`;

const InputCheckBox = styled.input`
  margin: 0;
  padding: 0.1rem 0.3rem;
  font-size: 1rem;
  font-weight: 600;
  background-color: var(--grey);
  color: var(--green);
  width: 50%;
`;
