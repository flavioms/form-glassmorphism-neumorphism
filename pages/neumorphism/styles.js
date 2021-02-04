import styled from "styled-components";
import BackgroundImg from "../../assets/background.jpg";
import { motion } from "framer-motion";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`;

export const Left = styled(motion.div)`
  flex: 1;
  height: 100vh;
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  filter: grayscale(100%);
`;

export const Wrapper = styled(motion.div)`
  color: #444;

  h1 {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }

  label {
    font-size: 1.1rem;
    font-weight: 800;
    font-family: sans-serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }

  input {
    border: none;
    outline: none;
    border-radius: 50px;
    background: #e0e0e0;
    box-shadow: inset 10px 10px 28px #bababa, inset -10px -10px 28px #ffffff;
    transition: box-shadow 0.3s ease-in-out;

    &:focus {
      box-shadow: 10px 10px 28px #bababa, -10px -10px 28px #ffffff;
      transition: box-shadow 0.3s ease-in-out;
    }
  }

  button {
    border-radius: 50px;
    background: linear-gradient(145deg, #f0f0f0, #cacaca);
    box-shadow: 10px 10px 28px #bababa, -10px -10px 28px #ffffff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: box-shadow 0.3s ease-in-out;
    font-weight: 600;
    font-family: sans-serif;
    color: #444;

    &:active {
      background: #e0e0e0;
      box-shadow: inset 10px 10px 28px #bababa, inset -10px -10px 28px #ffffff;
      transition: box-shadow 0.3s ease-in-out;
    }
  }
`;

export const Right = styled(motion.div)`
  flex: 1;
  height: 100vh;
  padding: 2rem;
  background: #e0e0e0;
`;
