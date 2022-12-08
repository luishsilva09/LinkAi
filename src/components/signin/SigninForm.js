import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";
import UserContext from "../../context/userContext";
import jwt_decode from "jwt-decode";

export default function SigninForm() {
  const { setUserData } = useContext(UserContext);
  const [load, setLoad] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  async function sendLogin(event) {
    event.preventDefault();
    setLoad(true);
    await api
      .post("/users/signin", loginData)
      .then((res) => {
        setLoad(false);
        setUserData({ ...jwt_decode(res.data), token: res.data });
        window.localStorage.setItem("token", res.data);
        navigate("/dashboard");
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
      <Form onSubmit={(event) => sendLogin(event)}>
        <p>E-mail:</p>
        <input
          type="email"
          placeholder="e-mail"
          disabled={load}
          value={loginData.email}
          onChange={(e) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
          data-cy="email"
        />
        <p> Senha:</p>
        <input
          type="password"
          placeholder="senha"
          disabled={load}
          value={loginData.password}
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
          data-cy="password"
        />
        <button type="submit" disabled={load} data-cy="submitSignin">
          {load ? <ThreeDots color="#fff" /> : <>Entrar</>}
        </button>

        <Link to="/users/signup">
          <h3>Ainda não possui cadastro? Faça cadastro aqui.</h3>
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
  height: 380px;
  width: 100%;
  padding: 50px 20px 30px 20px;
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
