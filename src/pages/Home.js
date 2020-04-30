import React from "react";
import Form from "../components/Form";
import { connect } from "react-redux";
import {
  PageLayout,
  CardContainer,
  TextContainer,
  BasicText,
  StyledLink
} from "../styles/elements";


const Home = (props) => {
  const userData = props.user.user;
  console.log(JSON.stringify(props.user, null, 2))
  return (
    <PageLayout>
      <Form/>
      {userData && (
      <CardContainer>          
        {userData.repos_url && <StyledLink to="/repo">Display repos</StyledLink>}
        <img src={userData.avatar_url} alt={userData.avatar_url} />   
        <TextContainer>          
                <BasicText>Name: {userData.login}</BasicText>
                <BasicText>Bio: {userData.bio}</BasicText>
                <BasicText>Repos: {userData.public_repos}</BasicText>
                <BasicText>ReposUrl: {userData.repos_url}</BasicText>
                <BasicText>Name: {userData.avatar_url}</BasicText>
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



