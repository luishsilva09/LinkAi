import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SignupForm() {
  return (
    <Container>
      <Form>
        <p>Nome:</p>
        <input></input>
        <p>E-mail:</p>
        <input></input>
        <p>Senha:</p>
        <input></input>
        <p>Confirme senha:</p>
        <input></input>
        <button>Cadastrar</button>
        <Link to="/users/signin">
          <h3>Já possui cadastro? Faça login aqui.</h3>
        </Link>
      </Form>
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
    &:hover {
      cursor: pointer;
      filter: brightness(130%);
    }
  }
`;
