import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";

export default function SignupForm() {
  const [newUserData, setNewUserData] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
    imageUrl: "",
  });
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  async function sendSignup(event) {
    event.preventDefault();
    setLoad(true);
    await api
      .post("/users/signup", newUserData)
      .then((res) => {
        toast.success("Criado com sucesso", {
          closeOnClick: true,
          pauseOnHover: false,
        });
        setLoad(false);
        navigate("/users/signin");
      })
      .catch((error) => {
        toast.error("Verifique seus dados", {
          closeOnClick: true,
          pauseOnHover: false,
        });
        setLoad(false);
      });
  }
  return (
    <Container>
      <Form onSubmit={(event) => sendSignup(event)}>
        <p>Nome:</p>
        <input
          type="text"
          placeholder="Fulano"
          disabled={load}
          value={newUserData.name}
          onChange={(e) =>
            setNewUserData({ ...newUserData, name: e.target.value })
          }
          data-cy="name"
        />
        <p>E-mail:</p>
        <input
          type="email"
          placeholder="fulano@uol.com"
          disabled={load}
          value={newUserData.email}
          onChange={(e) =>
            setNewUserData({ ...newUserData, email: e.target.value })
          }
          data-cy="email"
        />
        <p>Senha:</p>
        <input
          type="password"
          placeholder="******"
          disabled={load}
          value={newUserData.password}
          onChange={(e) =>
            setNewUserData({ ...newUserData, password: e.target.value })
          }
          data-cy="password"
        />
        <p>Confirme senha:</p>
        <input
          type="password"
          placeholder="******"
          disabled={load}
          value={newUserData.repeatPassword}
          onChange={(e) =>
            setNewUserData({ ...newUserData, repeatPassword: e.target.value })
          }
          data-cy="repeatPassword"
        />
        <p>Foto perfil:</p>
        <input
          type="text"
          placeholder="URL"
          disabled={load}
          value={newUserData.imageUrl}
          onChange={(e) =>
            setNewUserData({ ...newUserData, imageUrl: e.target.value })
          }
          data-cy="imageUrl"
        />
        <button type="submit" disabled={load} data-cy="submitForm">
          {load ? <ThreeDots color="#fff" /> : <>Cadastrar</>}
        </button>
        <Link to="/users/signin">
          <h3>Já possui cadastro? Faça login aqui.</h3>
        </Link>
      </Form>
      <ToastContainer />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #d9d9d9;
  border-radius: 20px;
  height: 600px;
  width: 100%;
  padding: 5px 20px 30px 20px;
  flex-wrap: wrap;
  max-width: 500px;
`;

const Form = styled.form`
  input {
    height: 50px;
    border: none;
    border-radius: 20px;
    width: 100%;
    font-size: 20px;
    padding: 10px;
  }
  p {
    font-size: 20px;
    margin: 10px;
  }
  h3 {
    text-align: center;
    margin-top: 10px;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
  a {
    text-decoration: none;
    color: #000;
  }
  button {
    width: 100%;
    height: 35px;
    border: none;
    border-radius: 20px;
    background-color: #0ba035;
    color: #fff;
    font-size: 20px;
    margin-top: 50px;
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
