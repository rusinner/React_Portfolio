import React from "react";
import styled from "styled-components";
// import { NavLink } from "react-router-dom";
import { Github, Facebook, Instagram } from "../components/AllSvgs";
const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) => props.theme.text};
`;
const SocialIcons = () => {
  return (
    <Icons>
      <div>
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href="https://github.com/rusinner"
          rel="noreferrer"
        >
          <Github width={35} height={35} fill="currentColor" />
        </a>
      </div>
      <div>
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href="https://facebook.com/vooprogue"
          rel="noreferrer"
        >
          <Facebook width={35} height={32} fill="currentColor" />
        </a>
      </div>
      <div>
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href="https://instagram.com/vooprogue"
          rel="noreferrer"
        >
          <Instagram width={35} height={35} fill="currentColor" />
        </a>
      </div>

      <Line />
    </Icons>
  );
};

export default SocialIcons;
