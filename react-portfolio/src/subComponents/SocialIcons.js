import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Github, Facebook, Instagram } from "../components/AllSvgs";
const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;
`;
const SocialIcons = () => {
  return (
    <Icons>
      <div>
        <NavLink to="/">
          <Github width={35} height={35} fill="currentColor" />
        </NavLink>
      </div>
      <div>
        <NavLink to="/">
          <Facebook width={35} height={32} fill="currentColor" />
        </NavLink>
      </div>
      <div>
        <NavLink to="/">
          <Instagram width={35} height={35} fill="currentColor" />
        </NavLink>
      </div>
    </Icons>
  );
};

export default SocialIcons;
