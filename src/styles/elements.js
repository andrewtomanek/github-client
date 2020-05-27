import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageLayout = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 2rem;
  justify-items: center;
  align-items: center;
  margin: 0;
  padding: 2rem;
  min-height: 80vh;
  overflow: hidden;
`;

export const BasicButton = styled.button`
  position: relative;
  padding: 0.3rem;
  font-size: 1rem;
  font-weight: 600;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  border: 0.3rem solid rgba(27, 31, 35, 0.2);
  border-radius: 0.3rem;
`;

export const StyledLink = styled(Link)`
  background-color: var(--green);
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 0.1rem 0.5rem;
  margin: 0rem;
  text-align: center;
  text-decoration: none;
  border-radius: 0.5rem;
`;

export const InputBox = styled.form`
  display: grid;
  grid-auto-flow: row;
  align-items: center;
  align-content: space-around;
  justify-content: center;
  grid-gap: 1rem;
  padding: 1rem 0.5rem;
`;

export const InputField = styled.input`
  margin: 0;
  padding: 0.1rem 0.3rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  background-color: #fff;
`;

export const InputLabel = styled.label`
  height: 100%;
  margin: 0;
  padding: 0.1rem 0.3rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  color: #fff;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 1rem;
  align-items: center;
  justify-items: center;
  margin: 0;
  padding: 1rem;
  overflow: hidden;
  background-color: hsla(0, 0%, 70%, 1);
  border-radius: 0.5rem;
`;

export const TextContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  align-items: center;
  margin: 0;
  padding: 0;
  overflow: hidden;
  border-radius: 0.5rem;
  background-color: hsla(0, 0%, 75%, 1);
`;

export const BasicHeading = styled.h3`
  margin: 0;
  padding: 0.1rem 0.3rem;
  font-size: 1.5rem;
  font-weight: 800;
  text-align: center;
  border-radius: 0.3rem;
  background-color: var(--blue);
  color: var(--dark);

`;

export const BasicText = styled.p`
  margin: 0;
  padding: 0.1rem 0.3rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: left;
  border-radius: 0.3rem;
`;
