import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import { sliderItems } from "../data";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const Arrow = styled.div`
  align-items: center;
  background-color: #fff7f7;
  border-radius: 50%;
  bottom: 0;
  cursor: pointer;
  display: flex;
  height: 50px;
  justify-content: center;
  left: ${({ direction }) => direction === "left" && "10px"};
  margin: auto;
  opacity: 0.5;
  position: absolute;
  right: ${({ direction }) => direction === "right" && "10px"};
  top: 0;
  width: 50px;
  z-index: 2;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  transition: all 1500ms ease;
  transform: translateX(${({ slideIndex }) => slideIndex * -100}vw);
`;

const Slide = styled.div`
  align-items: center;
  background-color: #${({ bg }) => bg};
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  margin: 50px 0;
`;
const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  font-size: 20px;
  padding: 10px;
`;

export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map(({ id, img, title, desc, bg }) => (
          <Slide key={id} bg={bg}>
            <ImgContainer>
              <Image src={img} />
            </ImgContainer>

            <InfoContainer>
              <Title>{title}</Title>
              <Desc>{desc}</Desc>
              <Button>Shop now</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>

      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};
