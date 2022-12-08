import { useContext, useState } from "react";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import UserContext from "../../context/userContext";
import api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function NewLInkForm() {
  const { userData } = useContext(UserContext);
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();
  const [linkData, setlinkData] = useState({
    tag: "",
    originalLink: "",
  });
  if (userData === undefined) {
    window.location.assign("/");
    return <>erro 404</>;
  }
  const config = {
    headers: {
      Authorization: `Bearer ${userData.token}`,
    },
  };

  async function createLink(event) {
    event.preventDefault();
    setLoad(true);
    await api
      .post("/links/create", linkData, config)
      .then(() => {
        toast.success("Criado com sucesso", {
          closeOnClick: true,
          pauseOnHover: false,
          autoClose: 2000,
        });
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      })
      .catch(() => {
        toast.error("verifique os dados", {
          closeOnClick: true,
          pauseOnHover: false,
        });
        setLoad(false);
      });
  }
  return (
    <>
      <Form onSubmit={(event) => createLink(event)}>
        <h3>Nome:</h3>
        <input
          type="text"
          placeholder="Nome link"
          disabled={load}
          value={linkData.tag}
          onChange={(e) => setlinkData({ ...linkData, tag: e.target.value })}
        />
        <h3>Link:</h3>
        <input
          type="text"
          placeholder="URL"
          disabled={load}
          value={linkData.originalLink}
          onChange={(e) =>
            setlinkData({ ...linkData, originalLink: e.target.value })
          }
        />
        {/* <h3>Link imagem:</h3>
        <input type="text" placeholder="" disabled={load} /> */}
        <button type="submit">
          {load ? <ThreeDots color="#fff" /> : <>Adicionar</>}
        </button>
      </Form>
      <ToastContainer />
    </>
  );
}

const Form = styled.form`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  input {
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 20px;
    width: 100%;
    font-size: 20px;
    padding: 10px;
    background-color: #d9d9d9;
  }
  h3 {
    width: 100%;
    font-size: 25px;
    margin: 6px;
  }
  button {
    width: 300px;
    height: 50px;
    border: none;
    border-radius: 20px;
    background-color: #0ba035;
    font-size: 30px;
    color: #fff;
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      cursor: pointer;
      filter: brightness(130%);
    }
    &:active {
      transform: scale(0.9, 0.9);
    }
  }
`;
