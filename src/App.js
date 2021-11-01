import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

import ListItem from "./components/ListItem";

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #ccc;
  padding: 10px;
`;

function App() {
  return (
    <Container>
      <ListContainer>
        <ListItem />
        <ListItem />
        <ListItem />
      </ListContainer>
    </Container>
  );
}

export default App;
