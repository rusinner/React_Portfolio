import React from "react";
import styled from "styled-components";
import img from "../assets/Images/blog-bg.jpg";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { Blogs } from "../data/BlogData";
import BlogComponent from "./BlogComponent";
import Anchor from "../subComponents/Anchor";

const MainContainer = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-top: 8rem;
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

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(calc(10rem + 15vw), 1fr));
  }
`;

const BlogPage = () => {
  return (
    <MainContainer>
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIcons />
        <Anchor />
        <Center>
          <Grid>
            {Blogs.map((blog) => (
              <BlogComponent key={blog.id} blog={blog} />
            ))}
          </Grid>
        </Center>
      </Container>
    </MainContainer>
  );
};

export default BlogPage;
