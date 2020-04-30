import React, { useState, useEffect } from "react";
import axios from "axios";
import Repository from "../components/Repository";
import { connect } from "react-redux";
import {
  PageLayout,
  BasicButton,
  InputBox,
} from "../styles/elements";
import styled from "styled-components";

const Repositories = (props) => {
  const [queryString, setQueryString] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [reposArray, setReposArray] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (props.user.user) {
      props.user.user && getRepos();
    } else {
      props.history.push("/");
    }
  }, []);

  const toggleCheckboxChange = (event) => {
    setIsChecked(!isChecked);
    displayRepos();
  };

  const handleFilter = (event) => {
    setQueryString(event.target.value);
  };

  const getRepos = (e) => {
    const repoUrl = `${props.user.user.repos_url}`;
    axios
      .get(repoUrl)
      .then((responses) => {
        const repos = responses.data.map(
          ({
            name,
            language,
            html_url,
            created_at,
            description,
            stargazers_count,
            ...otherData
          }) => {
            return {
              name,
              language,
              html_url,
              created_at,
              description,
              stargazers_count,
              otherData
            };
          }
        );
        setReposArray(repos);
      })
      .catch((error) => {
        console.log(`inside getrepos error: ${error}`);
        setErrorMessage(error.response.statusText);
      });
  };

  const filterRepos = () => {
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
    if (isChecked) {
      setReposArray(sortedHighStars);
    } else {
      setReposArray(sortedLowStars);
    }
  };

  return (
    <PageLayout>
      <InputGroup>
        <input
          value={queryString}
          placeholder="filter by queryString"
          onChange={handleFilter}
        ></input>
        <Button onClick={getRepos}> reset</Button>
        <div className="checkbox">
          <label>
            <InputCheckBox
              type="checkbox"
              value={isChecked}
              onChange={toggleCheckboxChange}
            />

            <Button onClick={filterRepos}> filter repos</Button>
          </label>
        </div>
      </InputGroup>
      {reposArray.length > 0 && (
        <RepoList>
          {reposArray.map((repo) => (
            <Repository key={repo.name} repo={repo} />
          ))}
        </RepoList>
      )}
      {reposArray.length === 0 && <div>{errorMessage}</div>}
    </    PageLayout>

  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Repositories);

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

const Button = styled(BasicButton)`
  border: solid 0.1rem white;
  border-radius: 0.1rem 0.1rem;
  color: #fff;
  background-color: var(--green);
`;

export const InputCheckBox = styled.input`
  margin: 0;
  padding: 0.1rem 0.3rem;
  font-size: 1rem;
  font-weight: 600;
  color: hsla(70, 30%, 30%, 1);
  background-color: #fff;
  width: 50%;
`;

const InputGroup = styled(InputBox)`
  background-color: var(--grey);
`;
