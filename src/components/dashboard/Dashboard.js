import styled from "styled-components";
import TopBar from "../topBar/TopBar";
import { AiFillPlusCircle } from "react-icons/ai";
import LinkType from "./LinkType";

export default function Dashboard() {
  return (
    <Container>
      <TopBar />
      <Content>
        <UserInfo>
          <img
            src="https://sm.ign.com/ign_br/screenshot/default/goku_trw2.jpg"
            alt="foto perfil"
          />
          <span>
            <p>Luis henrique</p>
            <h3>luishsilva09@gmail.com</h3>
          </span>
        </UserInfo>
        <Title>
          <h2>Meus links:</h2>
          <Plus />
        </Title>
        <LinksContent>
          <LinkType />
          <LinkType />
          <LinkType />
        </LinksContent>
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
  h2 {
    font-size: 30px;
    margin: 15px;
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
`;

const LinksContent = styled.span`
  width: 100%;
  height: 100%;
`;
