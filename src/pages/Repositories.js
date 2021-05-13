import React, { useState, useEffect, useCallback } from "react";
import Repository from "../components/Repository";
import FilterForm from "../components/FilterForm";
import { connect } from "react-redux";
import { PageLayout, StyledLink, BasicHeading } from "../styles/elements";
import styled from "styled-components";

const Repositories = (props) => {
  const [reposArray, setReposArray] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const fetchFilteredRepos = props.loadUserRepos;

  const getRepos = useCallback(async () => {
    fetchFilteredRepos(props.user.user.repos_url);
  }, [fetchFilteredRepos, props.user.user.repos_url]);

  useEffect(() => {
    if (props.user.user) {
      props.user.user && getRepos();
    } else {
      props.history.push("/");
    }
  }, [getRepos, props.history, props.user.user]);

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
        <StyledLink to={`/`}>New search</StyledLink>
        <FilterForm filterByQuery={filterByQuery} />
        <CheckBoxContainer>
          <BasicHeading>Sort by Stargazers count</BasicHeading>
          <InputCheckBox
            type="checkbox"
            value={isChecked}
            onChange={toggleCheckboxChange}
          />
        </CheckBoxContainer>
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
  background-color: hsla(0, 0%, 90%, 1);
  border: 0.2rem solid hsla(0, 0%, 50%, 1);
  border-radius: 1rem;
`;

const CheckBoxContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 0.3rem;
  align-items: center;
  justify-items: center;
  padding: 0.5rem;
  background-color: hsla(0, 0%, 90%, 1);
  border-radius: 0.5rem;
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
