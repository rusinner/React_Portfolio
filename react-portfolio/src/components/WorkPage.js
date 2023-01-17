import React, { useRef, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { darkTheme } from "./Themes";
import { motion } from "framer-motion";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import { Work } from "../data/WorkData";
import Card from "../subComponents/Card";
import BigTitle from "../subComponents/BigTitle";

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  overflow-x: auto;
`;
const Main = styled(motion.ul)`
  position: absolute;
  top: 12rem;
  left: calc(2rem + 15vw);
  height: auto;
  display: flex;
  color: white;
`;

// framer motion
const MotionContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const WorkPage = () => {
  useEffect(() => {
    // let element = ref.current;
    // const rotate = () => {
    //   element.style.transform = `translateX(${-window.pageYOffset}px)`;
    // };
    // window.addEventListener("scroll", rotate);
    // return () => window.removeEventListener("scroll", rotate);
  }, []);

  // const ref = useRef(null);
  return (
    <ThemeProvider theme={darkTheme}>
      <LogoComponent theme="light" />
      <SocialIcons theme="voop" />
      <PowerButton />

      <Box
        variants={MotionContainer}
        initial="hidden"
        animate="show"
        exit={{
          opacity: 0,

          transition: { duration: 0.5 },
        }}
      >
        <Main>
          {Work.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>
        <BigTitle text="WORK" top="10%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
