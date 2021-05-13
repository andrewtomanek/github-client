import React from "react";
import {
  TextContainer,
  BasicHeading,
  BasicText,
  BasicAnchor,
  StyledLink,
  LinkButton,
} from "../styles/elements";
import styled from "styled-components";

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
    <DetailContainer>
      <StyledLink to={`/`}>New search</StyledLink>
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
          <BasicAnchor href={`${html_url}`}>
            <LinkButton>Open on github</LinkButton>
          </BasicAnchor>
        )}
      </TextContainer>
    </DetailContainer>
  );
};
export default RepoCard;

export const DetailContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 1rem;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
`;
