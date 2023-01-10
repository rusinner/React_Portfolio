//Home Button

import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { PowerBtn } from "../components/AllSvgs";

const Power = styled.button`
  position: fixed;
  top: 2rem;
  left: 50vw;

  transform: translate(-50%, 0);

  background-color: 3FCF6F4;

  border-radius: 50%;
  border: 1px solid #000;
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  cursor: pointer;

  &:hover {
    background-color: rgba(244, 0, 165, 0.4);
    box-shadow: 0 0 8px 6px rgba(244, 0, 165, 0.2);
  }

  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }
`;

const PowerButton = () => {
  return (
    <Power>
      <NavLink to="/">
        <PowerBtn width={50} height={50} fill="currentColor" />
      </NavLink>
    </Power>
  );
};

export default PowerButton;
