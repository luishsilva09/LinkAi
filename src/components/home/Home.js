import TopBar from "../topBar/TopBar";
import styled from "styled-components";
import Moldura from "../../assets/moldura2.png";
import Page from "../../assets/page.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container>
      <TopBar />
      <Info>
        <img className="mold" src={Moldura} alt="phone" />
        <img className="page" src={Page} alt="page" />
        <Text>
          <h2>Sinta-se </h2>
          <h2>conectado</h2>
          <h3>Tudo em um só lugar ...</h3>
          <Link to="/users/signup">
            <button>Começar</button>
          </Link>
        </Text>
      </Info>
    </Container>
  );
}

const Container = styled.div`
  background-color: #094b64;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  padding-top: 30px;
  position: relative;
  .mold {
    z-index: 1;
  }
  .page {
    position: absolute;
    border-radius: 30px;
    height: 580px;
    top: 40px;
    left: 14px;
  }
  img {
    height: 600px;
    margin-right: 20px;
  }

  @media (max-width: 700px) {
    justify-content: center;
    .page,
    .mold {
      display: none;
    }
  }
`;
const Text = styled.div`
  height: 100%;
  color: #fff;

  h2 {
    font-size: 70px;
    margin-bottom: 15px;
  }
  h3 {
    font-size: 31px;
    margin-bottom: 50px;
  }
  button {
    border: none;
    border-radius: 20px;
    height: 30px;
    width: 200px;
    font-size: 20px;
    background-color: #0ba035;
    color: #fff;
    box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2);

    &:hover {
      cursor: pointer;
      filter: brightness(130%);
    }
    &:active {
      transform: scale(0.9, 0.9);
    }
  }
`;
