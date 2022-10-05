import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import api from "../../services/api";
import { Oval } from "react-loader-spinner";
import Links from "./Links";

function contentRender(userData) {
  return (
    <Content>
      <Profile src={userData.imageUrl} alt="perfil" />
      <p>{userData.name}</p>
      {userData.links.map((e, index) => (
        <Links linkData={e} key={index} />
      ))}
    </Content>
  );
}

export default function ViewLinks() {
  const { userId } = useParams();
  const [userData, setUserData] = useState();
  const [load, setLoad] = useState(true);

  useEffect(() => {
    getUserData(userId);
  }, []);

  async function getUserData(userId) {
    await api.get(`/links/view/${userId}`).then((res) => {
      setUserData(res.data);
      setLoad(false);
    });
  }
  return (
    <Container>
      {load ? (
        <Oval color="#091D64" secondaryColor="#094B64" />
      ) : (
        contentRender(userData)
      )}
      <Logo>LinkAí</Logo>
    </Container>
  );
}

const Logo = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  color: #fff;
`;
const Container = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #094b64;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 540px;
  margin-top: 20px;
  @media (max-width: 540px) {
    width: 100%;
  }

  p {
    width: 100%;
    text-align: center;
    font-size: 30px;
    color: #fff;
  }
`;

const Profile = styled.img`
  height: 260px;
  width: 260px;
  object-fit: cover;
  border-radius: 50%;
  @media (max-width: 540px) {
    width: 160px;
    height: 160px;
  }
`;
