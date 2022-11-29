import styled from "styled-components";
import api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import UserContext from "../../context/userContext";
import { useContext } from "react";

export default function ConfirmDelete({ linkId, setOpenModal, setReload }) {
  const { userData } = useContext(UserContext);

  const config = {
    headers: {
      Authorization: `Bearer ${userData.token}`,
    },
  };
  function closeModal() {
    setOpenModal(false);
  }
  async function deleteLink(linkId) {
    await api.delete(`/links/${linkId}`, config).then(() => {
      toast.success("Deletado com sucesso");
      setReload(1);
    });
  }
  return (
    <ContainerModal onClick={() => closeModal()}>
      <ModalContent>
        <p>Deseja realmente DELETAR esse link?</p>
        <Buttons>
          <Button color="red" onClick={() => closeModal()}>
            Cancelar
          </Button>
          <Button color="#0ba035" onClick={() => deleteLink(linkId)}>
            Deletar
          </Button>
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

  @media (max-width: 500px) {
    height: 120px;
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
