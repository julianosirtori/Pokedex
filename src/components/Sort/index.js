import React from 'react';

import {
  Container, Content, Title, Description, ButtonStyled,
} from './styles';

export default function Sort({ ...props }) {
  return (
    <Container {...props}>
      <Content>
        <Title>Sort</Title>
        <Description>Sort Pokémons alphabetically or by National Pokédex number!</Description>
        <ButtonStyled active>Smallest number first</ButtonStyled>
        <ButtonStyled>Highest number first</ButtonStyled>
        <ButtonStyled>A-Z</ButtonStyled>
        <ButtonStyled>Z-A</ButtonStyled>
      </Content>
    </Container>

  );
}
