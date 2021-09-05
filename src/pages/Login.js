import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

const Wrapper = styled.div`
  background-color: #fff;
  padding: 20px;
  width: 25%;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  background-color: teal;
  border: none;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 10px;
  padding: 15px 20px;
  width: 40%;
`;

const Link = styled.a`
  cursor: pointer;
  font-size: 12px;
  margin: 5px 0;
  &:hover {
    text-decoration: underline;
  }
`;

export const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>DON'T YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};
