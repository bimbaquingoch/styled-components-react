import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { Announcement } from "../components/Announcement";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Newsletter } from "../components/Newsletter";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  height: 90vh;
  object-fit: cover;
  width: 100%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
  width: 50%;
`;

const Filter = styled.div`
  align-items: center;
  display: flex;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.h1`
  background-color: ${({ color }) => color};
  border-radius: 50%;
  cursor: pointer;
  height: 20px;
  margin: 0 5px;
  width: 20px;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option`
  text-transform: uppercase;
`;

const AddContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 50%;
`;

const AmountContainer = styled.div`
  align-items: center;
  display: flex;
  font-weight: 700;
`;

const Amount = styled.span`
  align-items: center;
  border: 1px solid teal;
  border-radius: 8px;
  display: flex;
  height: 30px;
  justify-content: center;
  margin: 0 5px;
  width: 30px;
`;

export const Button = styled.button`
  background-color: white;
  border: 2px solid teal;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  padding: 15px;

  &:hover {
    background-color: #f8f4f4;
    border: 2px solid #000;
  }
`;

export const Product = () => {
  const sizes = ["xs", "s", "m", "l", "xl"];
  return (
    <Container>
      <Navbar />

      <Announcement />

      <Wrapper>
        <ImageContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Denin jumpsiut</Title>

          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, unde
            sint! Odio, maiores. Iste quis quos ipsam fugit veniam id tenetur
            perspiciatis, asperiores itaque temporibus, neque culpa provident
            non aperiam!
          </Desc>

          <Price>$ 20</Price>

          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>

            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                {sizes.map((item) => (
                  <FilterSizeOption key={item}>{item}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>

            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Newsletter />

      <Footer />
    </Container>
  );
};
