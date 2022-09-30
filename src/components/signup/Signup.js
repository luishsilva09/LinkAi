import styled from "styled-components";
import Logo from "../../assets/atom.png";
import { Link } from "react-router-dom";
import SignupForm from "./SignupForm";

export default function Signup() {
  return (
    <>
      <Container>
        <Left>
          <Link to="/">
            <img src={Logo} alt="logo" />
            <h1>LinkAí</h1>
          </Link>
        </Left>

        <Right>
          <h2>Cadastrar</h2>
          <SignupForm />
        </Right>
      </Container>
    </>
  );
}

const Container = styled.div`
  background-color: #094b64;
  display: flex;
  a {
    text-decoration: none;
  }
  @media (max-width: 610px) {
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
  }
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 48%;
  h2 {
    color: #fff;
    font-size: 40px;
    margin: 20px;
  }

  @media (max-width: 810px) {
    width: 60%;
  }
  @media (max-width: 610px) {
    max-width: 500px;
    width: 100%;
  }
`;
const Left = styled.div`
  background-color: #091d64;
  height: 100vh;
  width: 52%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  h1 {
    font-size: 100px;
    color: #fff;
  }
  img {
    height: 300px;
  }
  @media (max-width: 810px) {
    width: 40%;
    img {
      height: 200px;
    }
    h1 {
      font-size: 80px;
    }
  }
  @media (max-width: 610px) {
    display: none;
  }
`;
