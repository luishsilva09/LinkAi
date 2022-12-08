import styled from "styled-components";
import TopBar from "../topBar/TopBar";
import { AiFillPlusCircle } from "react-icons/ai";
import LinkType from "./LinkType";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/userContext";
import api from "../../services/api";

export default function Dashboard() {
  const { userData } = useContext(UserContext);
  const [userLinks, setUserLinks] = useState();
  const [reload, setReload] = useState(0);

  useEffect(() => {
    getLinks();
  }, [reload]);

  if (userData === undefined) {
    window.location.assign("/");
    return <>erro 404</>;
  }
  const config = {
    headers: {
      Authorization: `Bearer ${userData.token}`,
    },
  };

  async function getLinks() {
    await api.get(`/links`, config).then((res) => {
      setUserLinks(res.data);
    });
  }
  return (
    <Container>
      <TopBar />
      <Content>
        <UserInfo>
          <img src={userData.imageUrl} alt="foto perfil" />
          <span>
            <p>{userData.name}</p>
            <h3>{userData.email}</h3>
            <h4>{userData.urlId}</h4>
          </span>
        </UserInfo>
        <Title>
          <h2>Meus links:</h2>
          <Link to="/links/create">
            <Plus />
          </Link>
        </Title>
        <LinksContent>
          {userLinks && userLinks.length > 0 ? (
            userLinks.map((e, index) => (
              <LinkType key={index} linkData={e} setReload={setReload} />
            ))
          ) : (
            <>Não possui links ainda...</>
          )}
        </LinksContent>
        <button
          className="preview"
          onClick={() => window.open(`/view/${userData.urlId}`)}
        >
          Preview
        </button>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Content = styled.div`
  width: 500px;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: center;
  h2 {
    font-size: 30px;
    margin: 15px;
  }
  .preview {
    width: 300px;
    height: 50px;
    border: none;
    border-radius: 20px;
    background-color: #0ba035;
    font-size: 30px;
    color: #fff;
    margin: 20px;
    box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2);

    &:hover {
      cursor: pointer;
      filter: brightness(130%);
    }
    &:active {
      transform: scale(0.9, 0.9);
    }
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  width: 100%;
  p {
    font-size: 30px;
  }
  img {
    height: 90px;
    width: 90px;
    object-fit: cover;
    border-radius: 50%;
    margin: 15px;
  }
  h4 {
    font-size: 10px;
  }
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const Plus = styled(AiFillPlusCircle)`
  font-size: 30px;
  color: #0ba035;
  &:hover {
    cursor: pointer;
    filter: brightness(130%);
  }
  &:active {
    transform: scale(1.2, 1.2);
  }
`;

const LinksContent = styled.span`
  width: 100%;
  height: 100%;
`;
