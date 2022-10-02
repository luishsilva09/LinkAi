import styled from "styled-components";
import { BsPencilFill, BsFillTrashFill } from "react-icons/bs";

export default function LinkType({ linkData }) {
  return (
    <LinkContainer>
      <Info>
        <img src={linkData.previewImage} alt={linkData.tag} />
        <Text>
          <p>{linkData.tag}</p>
        </Text>
      </Info>
      <Edit>
        <Pencil />
        <Trash />
      </Edit>
    </LinkContainer>
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
  h4 {
    font-size: 10px;
  }
`;
