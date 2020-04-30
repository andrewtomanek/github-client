import React from "react";

const RepoCard = ({
  repo: { name, language, html_url, created_at, description, stargazers_count },
  ...otherData
}) => {

  return (
    <React.Fragment>
      <li>
        <div>Name: {name}</div>
        {language && <div>Language: {language}</div>}
        {html_url && <div>HTML_Url: {html_url}</div>}
        {created_at && <div>Created At: {created_at}</div>}
        {description && <div>Description: {description}</div>}
        {stargazers_count && <div>stargazers_count: {stargazers_count}</div>}
      </li>
      <p>{JSON.stringify(otherData, null, 2)}</p>
    </React.Fragment>
  );
};
export default RepoCard;
