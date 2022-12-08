import styled from "styled-components";
import { ImNewTab } from "react-icons/im";
import api from "../../services/api";

export default function Links({ linkData }) {
  async function redirectLink(originalLink) {
    await api.post(`/links/acessCount/${linkData.id}`).then((res) => {
      window.location.assign(originalLink);
    });
  }

  return (
    <LinkContainer onClick={() => redirectLink(linkData.originalLink)}>
      <Left>
        <Preview src={linkData.previewImage} alt={linkData.tag} />
        <h2>{linkData.tag}</h2>
      </Left>

      <ImNewTab size={"30"} />
    </LinkContainer>
  );
}

const LinkContainer = styled.div`
  width: 100%;
  min-height: 70px;
  background-color: #d9d9d9;
  display: flex;
  align-items: center;
  padding: 15px;
  margin-top: 10px;
  border-radius: 20px;
  justify-content: space-between;

  h2 {
    font-size: 30px;
    word-break: break-all;
  }
  :hover {
    cursor: pointer;
  }
`;
const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Preview = styled.img`
  height: 60px;
  width: 60px;
  margin-right: 15px;
`;
