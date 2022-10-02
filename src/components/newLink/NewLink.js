import styled from "styled-components";
import TopBar from "../topBar/TopBar";
import NewLInkForm from "./NewLinkForm";

export default function NewLink() {
  return (
    <Container>
      <TopBar />
      <Content>
        <p>Novo link</p>
        <NewLInkForm />
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
  max-width: 500px;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: center;
  text-align: left;
  p {
    width: 100%;
    font-size: 30px;
    border-bottom: 1px solid black;
    margin-top: 15px;
  }
`;
