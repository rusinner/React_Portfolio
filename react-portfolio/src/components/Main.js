import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
// import Blog from

// components
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import Intro from "./Intro";
import { Logo } from "./AllSvgs";

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
  @media screen and (max-width: 768px) {
    right: 2.5rem;
    top: 52%;
  }
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
  @media screen and (max-width: 768px) {
    left: 2.5rem;
  }
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

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "81%" : "50%")};
  left: ${(props) => (props.click ? "85%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease-out;

  & > :first-child {
  }

  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: #a80071;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : ".3%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

const Main = () => {
  const [click, setclick] = useState(false);

  const handleClick = () => setclick(!click);
  return (
    <MainContainer>
      <DarkDiv click={click} />
      <Container>
        <PowerButton />
        <LogoComponent theme={click ? "dark" : "light"} />
        <SocialIcons />

        <Center click={click}>
          <Logo
            onClick={() => handleClick()}
            width={click ? 100 : 230}
            height={click ? 100 : 230}
            fill="currentColor"
          />
          <span>click here</span>
        </Center>

        <Contact>
          <a
            style={{ color: "inherit" }}
            href="mailto:mavropoulos_th@outlook.com"
            target="_blank"
            rel="noreferrer"
          >
            <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              Say Hi...
            </motion.h3>
          </a>
        </Contact>
        <BLOG to="/blog">
          <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Blog
          </motion.h3>
        </BLOG>
        <WORK to="/work" click={click}>
          <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Work
          </motion.h3>
        </WORK>

        <BottomBar>
          <ABOUT to="/about">
            <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              About.
            </motion.h3>
          </ABOUT>
          <SKILLS to="/skills">
            <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              My Skills.
            </motion.h3>
          </SKILLS>
        </BottomBar>
      </Container>
      {click ? <Intro click={click} /> : null}
    </MainContainer>
  );
};

export default Main;
