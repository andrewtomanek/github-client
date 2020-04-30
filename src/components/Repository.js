import React from "react";
import { 
  Link
} from "react-router-dom";

const Repository = ({
  repo: {
    name,
    language,
    html_url,
    created_at,
    description,
    stargazers_count,
},
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
      {html_url &&   <Link to={`/detail/${name}`}>Display repo</Link>}    
    </React.Fragment>
  );
};
export default Repository;
