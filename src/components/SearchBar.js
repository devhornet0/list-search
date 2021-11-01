import React from "react";
import styled from "styled-components";
import { InputGroup, FormControl, Button, Form, Col, FormGroup } from "react-bootstrap";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchHeader = styled.div`
    margin-top: 4px;
`;

function SearchBar(props) {
    return (
        <SearchHeader>
            <Form onSubmit={handleOnSubmit}>
                <Form.Row>
                    <Col className="col-xl-3">
                        <FormControl
                            placeholder="Pesquisar livros"
                            aria-label="Pesquisar livros"
                            onChange={handleSearchChange}
                        />
                        <InputGroup>
                            <InputGroup.Append>
                                <Button type="submit">
                                    <FontAwesomeIcon icon={faSearch} />
                                </Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                    <Col className="col-xl-2">
                        <Form.Group controlId="order">
                            <Form.Control as="select">
                                <option>Mais novo</option>
                                <option>Mais velho</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Button variant="primary" className="float-right" onClick={newBook}>
                            Novo Livro
                        </Button>
                    </Col>
                </Form.Row>
            </Form>
        </SearchHeader>
    );
}

export default SearchBar;