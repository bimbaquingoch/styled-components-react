import styled from "styled-components";
import { Announcement } from "../components/Announcement";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Newsletter } from "../components/Newsletter";
import { Products } from "../components/Products";

const Container = styled.div``;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const Title = styled.h1`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  margin-right: 20px;
  padding: 10px;
`;

const Option = styled.option`
  text-transform: uppercase;
`;

export const ProductList = () => {
  const colores = ["white", "black", "red", "blue", "yellow", "green"];
  const sizes = ["xs", "s", "m", "l", "xl"];
  return (
    <Container>
      <Navbar />

      <Announcement />

      <Title>Dresses</Title>

      <FilterContainer>
        <Filter>
          <FilterText>Filter Products: </FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            {colores.map((item) => (
              <Option key={item}>{item}</Option>
            ))}
          </Select>

          <Select>
            <Option disabled selected>
              Size
            </Option>
            {sizes.map((item) => (
              <Option key={item}>{item}</Option>
            ))}
          </Select>
        </Filter>

        <Filter>
          <FilterText>Sort Products: </FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>

      <Products />

      <Newsletter />

      <Footer />
    </Container>
  );
};
