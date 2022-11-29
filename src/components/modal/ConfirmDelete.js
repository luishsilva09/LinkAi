import styled from "styled-components";

export default function confirmDelete() {
  return (
    <ContainerModal>
      <ModalContent>
        <p>Deseja realmente DELETAR esse link?</p>
        <Buttons>
          <Button color="red">Cancelar</Button>
          <Button color="#0ba035">Deletar</Button>
        </Buttons>
      </ModalContent>
    </ContainerModal>
  );
}

const ContainerModal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(125, 125, 125, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ModalContent = styled.div`
  width: 400px;
  height: 100px;
  background-color: white;
  border-radius: 20px;
  padding: 10px;
  p {
    margin: 10px;
    font-size: 20px;
  }
`;
const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Button = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 20px;
  background-color: ${(props) => props.color};
  font-size: 20px;
  color: #fff;
  margin: 2px;
  &:hover {
    cursor: pointer;
    filter: brightness(130%);
  }
`;
