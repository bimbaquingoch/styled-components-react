import styled from "styled-components";
import { popularProducts } from "../data";
import { Product } from "./Product";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
`;

export const Products = () => {
  return (
    <Container>
      {popularProducts.map(({ id, img }) => (
        <Product key={id} img={img} />
      ))}
    </Container>
  );
};
