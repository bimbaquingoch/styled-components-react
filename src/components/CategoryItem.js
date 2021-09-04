import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  height: 70vh;
  margin: 3px;
  position: relative;
`;
const Image = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;
const Info = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const Title = styled.h1`
  color: #fff;
  margin-bottom: 20px;
  text-shadow: 3px 3px 2px black;
`;
const Button = styled.button`
  background-color: #fff;
  border: none;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  padding: 10px;
`;

export const CategoryItem = ({ title, img }) => {
  return (
    <Container>
      <Image src={img} />
      <Info>
        <Title>{title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};
