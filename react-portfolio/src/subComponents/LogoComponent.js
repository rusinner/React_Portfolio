import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) => (props.color === "dark" ? "#000000" : "#f400a5")};
  font-family: "Ubuntu Mono", monospace;
  font-weight: 700;
  font-size: 3rem;
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    top: 1.6rem;
  }
`;

const LogoComponent = (props) => {
  return (
    <NavLink to="/">
      <Logo color={props.theme}>VooPROGue</Logo>
    </NavLink>
  );
};

export default LogoComponent;
