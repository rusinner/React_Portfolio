import React from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { motion } from "framer-motion";
import { lightTheme } from "./Themes";

import { Design, Develope } from "./AllSvgs";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";
import AnimatedPage from "./AnimatedPage";

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  transform-origin: 0% 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    gap: 3rem;
    padding-bottom: 2rem;
    padding-top: 6rem;
  }
`;

const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 48vh;
  z-index: 3;
  line-height: 1.5;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: scroll;
  cursor: pointer;
  ::-webkit-scrollbar {
    display: none;
  }
  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;
const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }
  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }
  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;

const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};
const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <LogoComponent theme="light" />
      <SocialIcons theme="light" />
      <PowerButton />
      <AnimatedPage>
        <Box>
          <ParticleComponent theme="light" />
          <Main variants={Item}>
            <Title>
              <Develope width={40} height={40} /> Developer
            </Title>
            <Description>
              Ι enjoy creating from scratch and bringing new ideas to life.
            </Description>
            <Description>
              <strong>Skills</strong>
              <p>
                Html, Css, Js, PHP, SQL, React.js, Redux, Next.js, Node.js,
                MongoDB, Sass, Bootstrap, Tailwind, Firebase, Wordpress
              </p>
            </Description>
            <Description>
              <strong>Tools</strong>
              <p>VScode, Github </p>
            </Description>
          </Main>
          <Main variants={Item}>
            <Title>
              <Design width={40} height={40} /> Designer
            </Title>
            <Description>
              I love to create targeted designs, Keep it clean, minimal and
              simple.
            </Description>
            <Description>
              <strong>I like to Design</strong>
              <ul>
                <li>Web Design</li>
                <li>Mobile Apps</li>
              </ul>
            </Description>
            <Description>
              <strong>Tools</strong>
              <ul>
                <li>Figma</li>
                <li>Photoshop</li>
              </ul>
            </Description>
          </Main>
          <BigTitle text="SKILLS" top="74%" right="30%" />
        </Box>
      </AnimatedPage>
    </ThemeProvider>
  );
};

export default MySkillsPage;
