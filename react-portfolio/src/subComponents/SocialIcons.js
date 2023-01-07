import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Github, Facebook, Instagram } from "../components/AllSvgs";

const SocialIcons = () => {
  return (
    <div>
      <div>
        <NavLink to="/">
          <Github width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>
      <div>
        <NavLink to="/">
          <Facebook width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>
      <div>
        <NavLink to="/">
          <Instagram width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>
    </div>
  );
};

export default SocialIcons;
