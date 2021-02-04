import React from "react";
import { Container, Left, Right, Wrapper } from "./styles";

function Neumorphism({ children }) {
  const bodyVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const formVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 100 },
  };

  return (
    <Container>
      <Left
        initial="hidden"
        animate="visible"
        variants={bodyVariants}
        transition={{
          duration: 2,
        }}
      />
      <Right>
        <Wrapper
          initial="hidden"
          animate="visible"
          variants={formVariants}
          transition={{
            duration: 2,
            delay: 1,
          }}
        >
          {children}
        </Wrapper>
      </Right>
    </Container>
  );
}

export default Neumorphism;
