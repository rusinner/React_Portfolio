import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { Link } from "../components/AllSvgs";
import { Anchor } from "../components/AllSvgs";

const Container = styled.div`
  position: relative;
`;

const Slider = styled.div`
  position: fixed;
  top: 0;
  right: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  transform: translateY(-100%);
`;
const PreDisplay = styled.div`
  position: fixed;
  top: 0;
  right: 2rem;
`;

const AnchorComponent = (props) => {
  const ref = useRef(null);
  const hiddenRef = useRef(null);

  useEffect(() => {
    //anchor movement on scroll
    const handleScroll = () => {
      let scrollPosition = window.pageYOffset;
      let windowSize = window.innerHeight;
      let bodyHeight = document.body.offsetHeight;

      let diff = Math.max(bodyHeight - (scrollPosition + windowSize));

      let diffP = (diff * 100) / (bodyHeight - windowSize);

      ref.current.style.transform = `translateY(${-diffP}%)`;

      if (window.pageYOffset > 5) {
        hiddenRef.current.style.display = "none";
      } else {
        hiddenRef.current.style.display = "block";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <PreDisplay ref={hiddenRef} className="hidden">
        <Anchor
          style={{
            position: "relative",
            right: "1.4rem",
            transform: "rotate(135deg)",
          }}
          width={70}
          height={70}
          fill="currentColor"
        />
      </PreDisplay>
      <Slider ref={ref}>
        {[...Array(props.numbers)].map((x, id) => (
          <Link
            key={id}
            width={25}
            height={25}
            fill="currentColor"
            className="chain"
          />
        ))}
        <Anchor
          style={{
            position: "relative",
            right: "1.4rem",
            transform: "rotate(135deg)",
          }}
          width={70}
          height={70}
          fill="currentColor"
        />
      </Slider>
    </Container>
  );
};

export default AnchorComponent;
