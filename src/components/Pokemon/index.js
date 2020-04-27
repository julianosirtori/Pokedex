import React from 'react';
import Badge from '../Badge';

import {
  Container,
  Content,
  NumberText,
  Info,
  PokeballSvg,
  NameText,
  Badges,
  Box6x3Svg,
  Pokemon001Svg,
} from './styles';

export default function Pokemon({ ...props }) {
  return (
    <Container {...props}>

      <Content>
        <Info>
          <NumberText>#001</NumberText>
          <NameText>Bulbasaur</NameText>
          <Badges>
            <Badge type="grass" color="#62B957">Grass</Badge>
            <Badge type="poison" color="#A552CC">Grass</Badge>
          </Badges>
        </Info>

        <PokeballSvg />
        <Box6x3Svg />
        <Pokemon001Svg />
      </Content>

    </Container>
  );
}
