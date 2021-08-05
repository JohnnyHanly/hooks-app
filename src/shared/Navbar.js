import styled from "styled-components";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <Nav>
      <Title>Movie Hooks</Title>
      <ul>
        <LinkItem to="/home">Home</LinkItem>
        <LinkItem to="/about">About</LinkItem>
      </ul>
    </Nav>
  );
};

const Nav = styled.div`
  padding: 0.5rem 2rem;
  background-color: #2b2b2b;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row;
  
`;

const Title = styled.h2``;

const LinkItem = styled(Link)`
  display: inline;
  padding: 0 1rem;
  margin: 1rem;
  font-size: 22px;
  text-decoration: none;
  color: white;
`;
