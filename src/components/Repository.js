import React from "react";
import {
  CardContainer,
  TextContainer,
  BasicHeading,
  BasicText,
  StyledLink,
} from "../styles/elements";

const Repository = ({
  repo: {
    name,
    language,
    html_url,
    created_at,
    description,
    stargazers_count,
    otherData,
  },
}) => {
  return (
    <CardContainer>
      {name && (
        <StyledLink to={`/detail/${name}`}>Display detail of {name}</StyledLink>
      )}
      {name && <BasicHeading>{name}</BasicHeading>}
      <TextContainer>
        {language && <BasicText>Language: {language}</BasicText>}
        {html_url && <BasicText>HTML_Url: {html_url}</BasicText>}
        {created_at && <BasicText>Created At: {created_at}</BasicText>}
        {description && <BasicText>Description: {description}</BasicText>}
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
      </TextContainer>
    </CardContainer>
  );
};
export default Repository;
