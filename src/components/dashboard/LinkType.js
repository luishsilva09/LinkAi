import styled from "styled-components";
import { BsPencilFill, BsFillTrashFill } from "react-icons/bs";
import { ToastContainer } from "react-toastify";
import ConfirmDelete from "../modal/ConfirmDelete";
import { useState } from "react";

export default function LinkType({ linkData, setReload }) {
  const [openModal, setOpenModal] = useState(false);

  function handleModal() {
    setOpenModal(true);
  }

  return (
    <>
      <LinkContainer>
        <Info>
          <Text>
            <img src={linkData.previewImage} alt={linkData.tag} />
            <p>{linkData.tag}</p>
          </Text>
          <AcessCount>
            <h3>Acessos:</h3>
            <h3>{linkData.acessCount}</h3>
          </AcessCount>
        </Info>
        <Edit>
          <Trash onClick={() => handleModal()} />
        </Edit>
      </LinkContainer>

      {openModal ? (
        <ConfirmDelete
          linkId={linkData.id}
          setOpenModal={setOpenModal}
          setReload={setReload}
        />
      ) : (
        <></>
      )}
      <ToastContainer />
    </>
  );
}

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;
  background-color: #d9d9d9;
  margin-top: 15px;
  border-radius: 20px;
  padding: 10px;
  width: 100%;
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  img {
    height: 60px;
    width: 60px;
    object-fit: cover;
    border-radius: 20px;
    margin-right: 15px;
  }
  p {
    font-size: 30px;
  }
`;
const Edit = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  width: 60px;
  justify-content: space-between;
`;

const Pencil = styled(BsPencilFill)`
  &:hover {
    cursor: pointer;
    filter: brightness(130%);
    color: #e26104;
  }
`;

const Trash = styled(BsFillTrashFill)`
  &:hover {
    cursor: pointer;
    filter: brightness(130%);
    color: red;
  }
`;

const Text = styled.div`
  display: flex;
  align-items: center;
`;

const AcessCount = styled.div`
  height: 50px;
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
  background-color: white;
  border-radius: 20px;
  h3 {
    font-size: 15px;
    margin: 3px;
  }
`;
