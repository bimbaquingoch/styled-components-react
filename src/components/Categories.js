import styled from "styled-components";
import { categories } from "../data";
import { CategoryItem } from "./CategoryItem";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export const Categories = () => {
  return (
    <Container>
      {categories.map(({ id, img, title }) => (
        <CategoryItem key={id} img={img} title={title} />
      ))}
    </Container>
  );
};
