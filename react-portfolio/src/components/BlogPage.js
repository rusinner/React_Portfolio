import React, { useState, useEffect } from "react";
import styled from "styled-components";
import img from "../assets/Images/blog-bg.jpg";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { Blogs } from "../data/BlogData";
import BlogComponent from "./BlogComponent";
import AnchorComponent from "../subComponents/AnchorComponent";
import BigTitle from "../subComponents/BigTitle";
import { motion } from "framer-motion";

const MainContainer = styled(motion.div)`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.8)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-top: 8rem;
  padding-bottom: 2rem;
  padding-left: 0.5rem;
  @media screen and (max-width: 768px) {
    padding-left: 0;
  }
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  pading-top: 10rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);

  @media screen and (max-width: 576px) {
    grid-template-columns: repeat(1, minmax(calc(10rem + 15vw), 1fr));
  }
`;
<script
  data-who="NAKER.IO"
  src="https://d23jutsnau9x47.cloudfront.net/studio/v1.5.1/viewer.js"
  data-option="{|id|:|63c5e95d6a3e92df9d648c59|}"
></script>;
//framer motion config
const MotionContainer = {
  hidden: { opacity: 0, width: "0px" },
  show: {
    opacity: 1,
    width: "100vw",
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const BlogPage = () => {
  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 30) / 30;
    setNumbers(parseInt(num));
  }, []);

  return (
    <MainContainer
      variants={MotionContainer}
      initial="hidden"
      animate="show"
      exit={{
        opacity: 0,
        transition: { duration: 0.5 },
      }}
    >
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIcons />
        <AnchorComponent numbers={numbers} />
        <Center>
          <Grid>
            {Blogs.map((blog) => (
              <BlogComponent key={blog.id} blog={blog} />
            ))}
          </Grid>
        </Center>
        <BigTitle text="BLOG" top="5rem" left="4rem" />
      </Container>
    </MainContainer>
  );
};

export default BlogPage;
