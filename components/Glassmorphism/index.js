import React from "react";

import { Container, Wrapper } from "./styles";

function Glassmorphism({ children }) {
  const bodyVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const formVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 100 },
  };

  return (
    <Container
      initial="hidden"
      animate="visible"
      variants={bodyVariants}
      transition={{
        duration: 2,
      }}
    >
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
    </Container>
  );
}

export default Glassmorphism;
