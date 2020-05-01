import React from "react";
import {
  TextContainer,
  BasicText,
  StyledLink
} from "../styles/elements";

const RepoCard = ({
  repo: { name, language, html_url, created_at, description, stargazers_count, ...otherData }
}) => {
 console.log(JSON.stringify(otherData, null, 2))

  return (
    <TextContainer>
        {name &&<BasicText>Name: {name}</BasicText>}
        {language && <BasicText>Language: {language}</BasicText>}
        {created_at && <BasicText>Created At: {created_at}</BasicText>}
        {description && <BasicText>Description: {description}</BasicText>}
        {stargazers_count && <BasicText>stargazers_count: {stargazers_count}</BasicText>}
        {html_url && <a href={`${html_url}`}><BasicText>Open on github</BasicText></a>}
        <StyledLink to={`/`}>New search</StyledLink>
    </TextContainer>
  );
};
export default RepoCard;
