import styled from "styled-components";
import BackgroundImg from "../../assets/background.jpg";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  background-color: #000;
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  overflow: hidden;
`;

export const Wrapper = styled(motion.div)`
  width: 50%;
  height: 100vh;
  padding: 2rem;
  color: #fff;

  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: none;

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
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-top: 1px solid rgba(255, 255, 255, 0.6);
    border-left: 1px solid rgba(255, 255, 255, 0.6);
    outline: none;
    color: #fff;
    font-weight: 600;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }

  button {
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 2rem;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    font-weight: 600;
    text-transform: uppercase;
    transition: background 0.2s ease;
    cursor: pointer;
    outline: none;

    &[type="submit"] {
      background: rgba(154, 219, 81, 1);

      &:hover {
        background: rgba(154, 219, 81, 0.8);
      }
    }

    &[type="button"] {
      background: rgba(255, 35, 63, 1);

      &:hover {
        background: rgba(255, 35, 63, 0.8);
      }
    }
  }
`;
