import React from "react";
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
import AnimatedPage from "./AnimatedPage";

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

const WorkPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <LogoComponent theme="light" />
      <SocialIcons theme="voop" />
      <PowerButton />
      <AnimatedPage>
        <Box>
          <Main>
            {Work.map((d) => (
              <Card key={d.id} data={d} />
            ))}
          </Main>
          <BigTitle text="WORK" top="10%" right="20%" />
        </Box>
      </AnimatedPage>
    </ThemeProvider>
  );
};

export default WorkPage;
