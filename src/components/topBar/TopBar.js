import React from "react";
import styled from "styled-components";
import Logo from "../../assets/atom.png";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../context/userContext";
import { BiExit } from "react-icons/bi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

export default function TopBar() {
  const { userData, setUserData } = React.useContext(UserContext);
  const [openMenu, setOpenMenu] = React.useState(false);

  const navigate = useNavigate();
  function logout() {
    setUserData();
    window.localStorage.clear();
    navigate("/");
  }
  function handleMenu() {
    setOpenMenu(!openMenu);
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
          <UserMenu>
            <IoIosArrowDown
              size={35}
              onClick={() => handleMenu()}
              className={openMenu ? "rotate" : ""}
            />
            <img src={userData.imageUrl} alt="profile" />
            <Menu open={openMenu ? "flex" : "none"}>
              <MenuItem onClick={() => navigate("/dashboard")}>
                Dashboard
              </MenuItem>
              <MenuItem onClick={() => logout()}>Sair</MenuItem>
            </Menu>
          </UserMenu>
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

const UserMenu = styled.div`
  width: 100%;
  text-align: right;
  display: flex;
  justify-content: right;
  align-items: center;
  position: relative;
  .rotate {
    transform: rotate(180deg);
  }

  img {
    border-radius: 50%;
    height: 55px;
    width: 55px;
    object-fit: cover;
    margin: 5px;
  }
`;

const Menu = styled.div`
  position: absolute;
  background-color: #d9d9d9;
  z-index: 1;
  top: 60px;
  right: 60px;
  width: 100px;
  height: 70px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  display: ${(props) => props.open};
  flex-direction: column;
`;
const MenuItem = styled.div`
  color: black;
  font-size: 19px;
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;
