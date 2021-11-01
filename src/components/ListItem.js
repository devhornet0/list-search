import React from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
    border-radius:px;
    background-color: #fff;
    height: 120px;
    width: 262px;
    color: #29303b;
    margin-bottom: 10px;
    margin-right: 10px;
    padding: 10px;
`;

const Thumbnail = styled.img`
    width: auto;
    height: 100%;
    border: 0;
    vertical-align: middle;
    float: left;
    margin-right: 10px;
`;

const TitlePanel = styled.div`
    font-weight: 700;
    margin-bottom: 5px;
`;

const PricePanel = styled.div`
    margin-bottom: 5px;
`;

const ItemLink = styled.a`
    text-decoration: none;
`;

function ListItem (props) {
    return (
        <ItemLink src="https://www.luiztools.com.br/livro-nodejs-amazon" title="Clique para comprar">
            <ItemContainer>
                <Thumbnail src="https://m.media-amazon.com/images/I/4110e7iseFL.jpg" />
                <TitlePanel>Programação Web com NodeJS</TitlePanel>
                <PricePanel>R$ 4.99</PricePanel>
            </ItemContainer>
        </ItemLink>
    );
}

export default ListItem;