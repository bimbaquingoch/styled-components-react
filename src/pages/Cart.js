import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { Announcement } from "../components/Announcement";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  background-color: ${({ type }) =>
    type === "filled" ? "black" : "transparent"};
  border: ${({ type }) => type === "filled" && "none"};
  box-shadow: -2px 2px 2px 1px teal;
  color: ${({ type }) => type === "filled" && "white"};
  cursor: pointer;
  font-weight: 600;
  padding: 10px;
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  cursor: pointer;
  margin: 0 10px;
  text-decoration: underline;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  display: flex;
  flex: 2;
`;

const Image = styled.img`
  width: 250px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 20px;
`;

const ProductName = styled.span``;

const ProductID = styled.span``;

const ProductColor = styled.div`
  background-color: ${({ color }) => color};
  border-radius: 50%;
  box-shadow: 2px 2px 3px 1px gray;
  height: 20px;
  width: 20px;
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 300;
`;

const Hr = styled.hr`
  background-color: #add;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  border: 1px solid #add;
  border-radius: 10px;
  box-shadow: 1px 1px 2px 1px #ade;
  flex: 1;
  height: 50vh;
  padding: 20px;
`;

const SummaryTitle = styled.h1`
  font-weight: 300;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
  font-weight: ${({ type }) => type === "total" && "600"};
  font-size: ${({ type }) => type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  background-color: #000;
  border: none;
  box-shadow: 2px 2px 2px 1px teal;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  padding: 10px;
  width: 100%;
`;

export const Cart = () => {
  return (
    <Container>
      <Navbar />

      <Announcement />

      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHIPPING</TopButton>

          <TopTexts>
            <TopText>Shoopping bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>

          <TopButton type="filled">CHECK OUT NOW</TopButton>
        </Top>

        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />

                <Details>
                  <ProductName>
                    <b>Product:</b> Adidas Shoes
                  </ProductName>

                  <ProductID>
                    <b>ID:</b> 3456789876
                  </ProductID>

                  <ProductColor color="black" />

                  <ProductSize>
                    <b>Size: </b>39
                  </ProductSize>
                </Details>
              </ProductDetail>

              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>

                <ProductPrice>$30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />

            <Product>
              <ProductDetail>
                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />

                <Details>
                  <ProductName>
                    <b>Product:</b> Philz T-shit
                  </ProductName>

                  <ProductID>
                    <b>ID:</b> 3456789876
                  </ProductID>

                  <ProductColor color="gray" />

                  <ProductSize>
                    <b>Size: </b>L
                  </ProductSize>
                </Details>
              </ProductDetail>

              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>

                <ProductPrice>$15</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>

            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 8</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ -5</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>

            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>

      <Footer />
    </Container>
  );
};
