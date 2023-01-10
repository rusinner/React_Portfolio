import React from "react";
import styled from "styled-components";

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
`;

const LogoComponent = (props) => {
  return <Logo color={props.theme}>VooPROGue</Logo>;
};

export default LogoComponent;
