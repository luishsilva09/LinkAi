import styled from "styled-components";

export default function NewLInkForm() {
  return (
    <Form>
      <h3>Nome:</h3>
      <input></input>
      <h3>Link:</h3>
      <input></input>
      <h3>Link imagem:</h3>
      <input></input>
      <button>Adicionar</button>
    </Form>
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
`;
