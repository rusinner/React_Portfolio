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
const MainContainer = styled(motion.div)`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  position: relative;
  font-family: "Ubuntu Mono", monospace;
  ::-webkit-scrollbar {
    display: none;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }

  @media screen and (max-width: 768px) {
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: 1.9rem;
    }
  }
`;

const Contact = styled.div`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 3rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
  @media screen and (max-width: 768px) {
    top: 5.5rem;
    position: fixed;
  }
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
    left: 2rem;
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
  @media screen and (max-width: 768px) {
    top: -50%;
    right: 0;
    width: ${(props) => (props.click ? "100%" : ".3%")};
  }
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
            <motion.h3
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Say Hi...
            </motion.h3>
          </a>
        </Contact>
        <BLOG to="/blog">
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Blog
          </motion.h2>
        </BLOG>
        <WORK to="/work" click={click}>
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Work
          </motion.h2>
        </WORK>

        <BottomBar>
          <ABOUT to="/about">
            <motion.h2
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              About.
            </motion.h2>
          </ABOUT>
          <SKILLS to="/skills">
            <motion.h2
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              My Skills.
            </motion.h2>
          </SKILLS>
        </BottomBar>
      </Container>
      {click ? <Intro click={click} /> : null}
    </MainContainer>
  );
};

export default Main;
