import React from "react";
import { Heading, Container, Section } from "react-bulma-components";
import "bulma/css/bulma.min.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Section backgroundColor="dark" style={{ minHeight: "100vh" }}>
      <Container>
        <Heading textAlign={"center"} textColor="light" size={1}>
          My Pokédex
        </Heading>
        <Outlet />
      </Container>
    </Section>
  );
}

export default App;
