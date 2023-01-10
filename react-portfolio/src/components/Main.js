import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
// import Blog from

// components
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";

const Container = styled.div`
  padding: 2rem;
`;
const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Contact = styled.div`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 3rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;

const BLOG = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
  cursor: pointer;
`;
const WORK = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;
  cursor: pointer;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const ABOUT = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
  cursor: pointer;
`;
const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
  cursor: pointer;
`;

const Main = () => {
  return (
    <MainContainer>
      <Container>
        <PowerButton />
        <LogoComponent />
        <SocialIcons />

        <Contact>
          <a
            style={{ color: "inherit" }}
            href="mailto:mavropoulos_th@outlook.com"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Say Hi...</h3>
          </a>
        </Contact>
        <BLOG to="/blog">
          <h3>Blog</h3>
        </BLOG>
        <WORK to="/work">
          <h3>Work</h3>
        </WORK>

        <BottomBar>
          <ABOUT to="/about">
            <h3>About.</h3>
          </ABOUT>
          <SKILLS to="/skills">
            <h3>My Skills.</h3>
          </SKILLS>
        </BottomBar>
      </Container>
    </MainContainer>
  );
};

export default Main;
