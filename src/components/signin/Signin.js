import styled from "styled-components";
import Logo from "../../assets/atom.png";
import SigninForm from "./SigninForm";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import React from "react";
import UserContext from "../../context/userContext";

export default function Signin() {
  const localStorageUseToken = window.localStorage.getItem("token");
  const { setUserData } = React.useContext(UserContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (localStorageUseToken !== null) {
      setUserData({
        ...jwt_decode(localStorageUseToken),
        token: localStorageUseToken,
      });
      navigate("/dashboard");
      return;
    }
  }, []);
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
          <h2>Entrar</h2>
          <SigninForm />
        </Right>
      </Container>
    </>
  );
}

const Container = styled.div`
  background-color: #094b64;
  display: flex;
  height: 100vh;
  a {
    text-decoration: none;
  }
  @media (max-width: 610px) {
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
  }
  @media (max-height: 460px) {
    height: 100%;
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
