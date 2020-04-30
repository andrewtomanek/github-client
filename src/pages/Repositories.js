import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Repository from "../components/Repository";
import { connect } from "react-redux";

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
          }) => {
            return {
              name,
              language,
              html_url,
              created_at,
              description,
              stargazers_count,
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
    <React.Fragment>
      <InputGroup>
        <Input
          value={queryString}
          placeholder="filter by queryString"
          onChange={handleFilter}
        ></Input>
        <Button onClick={getRepos}> reset</Button>
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              value={isChecked}
              onChange={toggleCheckboxChange}
            />

            <Button onClick={filterRepos}> filter repos</Button>
          </label>
        </div>
      </InputGroup>
      {reposArray.length > 0 && (
        <RepoStyle>
          {reposArray.map((repo) => (
            <Repository key={repo.name} repo={repo} />
          ))}
        </RepoStyle>
      )}
      {reposArray.length === 0 && <div>{errorMessage}</div>}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Repositories);

const RepoStyle = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 20px;

  > li {
    padding: 10px 0;
  }

  > li + li {
    border-top: 1px solid #ddd;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const Input = styled.input`
  width: 70%;
  height: 34px;
  padding: 10px 10px;
  box-sizing: border-box;
`;

const Button = styled.button`
  font-size: 1rem;
  background-color: #87bdd8;
  padding: 2px 10px;
  font-weight: 400;
  height: 34px;
  border: 1px solid #87bdd8;
`;
