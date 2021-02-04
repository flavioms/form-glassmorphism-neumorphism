import React, { useCallback } from "react";
import { useRouter } from "next/router";
import { Container, InputWrapper, ButtonWrapper } from "./styles";

function Form() {
  const router = useRouter();

  const handleChangeMode = useCallback(
    (e) => {
      e.preventDefault();
      console.log(router.pathname);
      if (router.pathname === "/neumorphism") {
        router.push("glassmorphism");
      } else {
        router.push("neumorphism");
      }
    },
    [router]
  );

  return (
    <Container onSubmit={handleChangeMode}>
      <InputWrapper>
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" name="name" />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" name="password" />
      </InputWrapper>

      <ButtonWrapper>
        <button type="submit">Cadastrar</button>
        <button type="button">Cancelar</button>
      </ButtonWrapper>
    </Container>
  );
}

export default Form;
