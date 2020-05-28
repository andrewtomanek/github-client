import React from "react";
import Form from "../components/Form";
import { connect } from "react-redux";
import {
  PageLayout,
  CardContainer,
  TextContainer,
  BasicHeading,
  BasicText,
  BasicAnchor,
  StyledLink,
} from "../styles/elements";

const Home = (props) => {
  const userData = props.user.user;
  return (
    <PageLayout>
      <Form />
      {userData && (
        <CardContainer>
          {userData.repos_url && (
            <StyledLink to="/repos">Display repos</StyledLink>
          )}
          <img src={userData.avatar_url} alt={userData.avatar_url} />
          <TextContainer>
            <BasicHeading>{userData.login}</BasicHeading>
            <BasicText>Bio: {userData.bio}</BasicText>
            <BasicText>Repos: {userData.public_repos}</BasicText>
            <BasicText>ReposUrl: {userData.repos_url}</BasicText>
            <BasicText>Created at: {userData.created_at}</BasicText>
            <BasicText>Location: {userData.location}</BasicText>
            <BasicText>Name: {userData.name}</BasicText>
            <BasicText>ReposUrl: {userData.url}</BasicText>
            {userData.html_url && (
              <BasicAnchor href={`${userData.html_url}`}>
                <BasicHeading>Open on github</BasicHeading>
              </BasicAnchor>
            )}
          </TextContainer>
        </CardContainer>
      )}
    </PageLayout>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Home);
