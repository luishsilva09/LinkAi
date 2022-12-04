import React from "react";
import styled from "styled-components";
import Logo from "../../assets/atom.png";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../context/userContext";
import { BiExit } from "react-icons/bi";

export default function TopBar() {
  const { userData, setUserData } = React.useContext(UserContext);

  const navigate = useNavigate();
  function logout() {
    setUserData();
    window.localStorage.clear();
    navigate("/");
  }

  return (
    <Container>
      <LeftSide>
        <img src={Logo} alt="logo" />
        <h1>LinkAí</h1>
      </LeftSide>
      <RightSide>
        {userData ? (
          <span onClick={() => logout()}>
            <BiExit size={"30"}></BiExit>
          </span>
        ) : (
          <>
            <Link to="/">
              <p>Home</p>
            </Link>
            <Link to="users/signin">
              <p>Entrar</p>
            </Link>
            <Link to="/users/signup">
              <p>Cadastrar</p>
            </Link>
          </>
        )}
      </RightSide>
    </Container>
  );
}

const Container = styled.div`
  background-color: #091d64;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 15px;

  img {
    height: 55px;
  }
  a {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
  }
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-family: "Ubuntu";
  font-size: 40px;
`;
const RightSide = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
  color: #fff;
  font-weight: 300;
  span {
    width: 100%;
    text-align: right;
    cursor: pointer;
  }
`;
