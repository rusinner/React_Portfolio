import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Me from "../assets/Images/profileImg.png";

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  display: flex;
  background: linear-gradient(to right, #fcf6f4 50%, #a80071 50%) bottom,
    linear-gradient(to right, #fcf6f4 50%, #a80071 50%) top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid #fcf6f4;
  border-right: 2px solid #a80071;
  z-index: 1;
  @media screen and (max-width: 768px) {
  }
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  .pic {
    position: absolute;
    bottom: 0;
    left: 35%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;

    @media screen and (max-width: 768px) {
      transform: translateY(-230px);
      opacity: 0.5;
    }
  }
`;

const Text = styled(motion.div)`
  font-size: calc(1em + 1.5vw);
  color: #000000;
  padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media screen and (max-width: 768px) {
    padding-top: 0rem;
  }

  & > *:last-child {
    padding-top: 1rem;
    color: #000000;
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
    @media screen and (max-width: 768px) {
      font-size: calc(0.5rem + 2.5vw);
      padding-top: 0;
    }
  }
  h3 {
    @media screen and (max-width: 768px) {
    }
  }
`;

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "40vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <h2>Hi, I am</h2>
          <h3> Theologos Mavropoulos.</h3>
          <h6>In VooPROGue we design simple yet beautiful websites.</h6>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img className="pic" src={Me} alt="Profile Pic" />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
