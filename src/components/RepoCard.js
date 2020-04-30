import React from "react";
import {
  TextContainer,
  BasicText
} from "../styles/elements";

const RepoCard = ({
  repo: { name, language, html_url, created_at, description, stargazers_count, ...otherData }
}) => {
 console.log(JSON.stringify(otherData, null, 2))

  return (
    <TextContainer>
        {name &&<BasicText>Name: {name}</BasicText>}
        {language && <BasicText>Language: {language}</BasicText>}
        {html_url && <BasicText>HTML_Url: {html_url}</BasicText>}
        {created_at && <BasicText>Created At: {created_at}</BasicText>}
        {description && <BasicText>Description: {description}</BasicText>}
        {stargazers_count && <BasicText>stargazers_count: {stargazers_count}</BasicText>}
    </TextContainer>
  );
};
export default RepoCard;
