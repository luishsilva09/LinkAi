import React from "react";
import styled from "styled-components";
import Logo from "../../assets/atom.png";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../context/userContext";
import { BiExit } from "react-icons/bi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

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
        <Link to="/">
          <h1>LinkAí</h1>
        </Link>
      </LeftSide>
      <RightSide>
        {userData ? (
          <>
            <DashboardIcon>
              <Link to="/dashboard">
                <p>Dashboard</p>
              </Link>
            </DashboardIcon>

            <BiExit
              className="exit"
              size={"30"}
              onClick={() => logout()}
            ></BiExit>
          </>
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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

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
  color: #fff;
  font-weight: 300;
  width: 200px;
  align-items: center;
  justify-content: space-between;
  .exit {
    text-align: right;
    cursor: pointer;
  }
`;

const DashboardIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
