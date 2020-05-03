import React from "react";
import {
  TextContainer,
  BasicHeading,
  BasicText,
  StyledLink,
} from "../styles/elements";

const RepoCard = ({
  repo: {
    name,
    language,
    html_url,
    created_at,
    description,
    stargazers_count,
    ...otherData
  },
}) => {
  return (
    <TextContainer>
      {name && <BasicHeading>{name}</BasicHeading>}
      {language && <BasicText>Language: {language}</BasicText>}
      {description && <BasicText>Description: {description}</BasicText>}
      {created_at && <BasicText>Created At: {created_at}</BasicText>}
      {stargazers_count && (
        <BasicText>stargazers_count: {stargazers_count}</BasicText>
      )}
      {otherData && (
        <>
          <BasicText>clone_url: {otherData.clone_url}</BasicText>
          <BasicText>updated: {otherData.updated_at}</BasicText>
          <BasicText>size: {otherData.size}</BasicText>
          <BasicText>watchers: {otherData.watchers}</BasicText>
        </>
      )}
      {html_url && (
        <a href={`${html_url}`}>
          <BasicHeading>Open on github</BasicHeading>
        </a>
      )}
      <StyledLink to={`/`}>New search</StyledLink>
    </TextContainer>
  );
};
export default RepoCard;
