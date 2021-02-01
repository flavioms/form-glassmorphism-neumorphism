import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2rem;

  & > label {
    width: 100%;
    margin-bottom: 1rem;
  }

  & > input {
    width: 100%;
    padding: 1rem 2rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > button {
    padding: 1rem 2rem;
  }

  & > button:not(:nth-child(1)) {
    margin-left: 1rem;
  }
`;
