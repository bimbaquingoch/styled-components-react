import {
  GitHub,
  Instagram,
  LinkedIn,
  Mail,
  Room,
  Twitter,
  WhatsApp,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0;
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SocialIcon = styled.div`
  align-items: center;
  background-color: #${({ color }) => color};
  border-radius: 50%;
  color: #fff;
  display: flex;
  height: 40px;
  justify-content: center;
  margin-right: 20px;
  width: 40px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;
const ListItem = styled.li`
  margin-bottom: 10px;
  text-transform: capitalize;
  width: 50%;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  align-items: center;
  display: flex;
  margin: 10px;
`;

const Payment = styled.img``;

export const Footer = () => {
  const links = [
    "Home",
    "Cart",
    "Man fashion",
    "Accessories",
    "mi account",
    "order traking",
    "whishlist",
    "terms",
  ];

  return (
    <Container>
      <Left>
        <Logo>hola</Logo>

        <Desc>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          tempore. Quidem accusamus a corrupti repudiandae? Molestias ducimus
          porro dolorum sit nam cum laborum a ex impedit! Nemo nesciunt ratione
          cupiditate?
        </Desc>

        <SocialContainer>
          <SocialIcon color="3b5999">
            <LinkedIn />
          </SocialIcon>

          <SocialIcon color="e4405f">
            <Instagram />
          </SocialIcon>

          <SocialIcon color="55acee">
            <Twitter />
          </SocialIcon>

          <SocialIcon color="051f2b">
            <GitHub />
          </SocialIcon>
        </SocialContainer>
      </Left>

      {/* center */}
      <Center>
        <Title>Useful Links</Title>
        <List>
          {links.map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <SocialIcon color="051f2b">
            <Room />
          </SocialIcon>
          Quito - Ecuador
        </ContactItem>
        <hr />
        <ContactItem>
          <SocialIcon color="57c181">
            <WhatsApp />
          </SocialIcon>
          +593 9637 66640
        </ContactItem>

        <hr />
        <ContactItem>
          <SocialIcon color="3b5999">
            <Mail />
          </SocialIcon>
          bryanimbaquingo1@gmail.com
        </ContactItem>
        <hr />
        <ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </ContactItem>
      </Right>
    </Container>
  );
};
