import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

import ListItem from "./components/ListItem";
import SearchBar from "./components/SearchBar";
import { getBooks } from "./services/BooksService";

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #ccc;
  padding: 10px;
`;

function App() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(getBooks());
  }, []);

  return (
    <Container>
      <h1>Livros</h1>
      <hr />
      <SearchBar />
      <ListContainer>

          {books.map(book => {
            return (
              <ListItem
                key={book.url}
                title={book.title}
                image={book.image}
                price={book.price}
                url={book.url}
              />
            )
          })}
        
      </ListContainer>
    </Container>
  );
}

export default App;
