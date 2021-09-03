import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  background-color: teal;
  color: white;
  display: flex;
  height: 30px;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
`;

export const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
};
