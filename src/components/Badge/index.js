import React from 'react';

import typeColors from '../../styles/typesColors';
import TypeSvg from '../../assets/types/grass.svg';
import { Container, TextBadge } from './styles';

export default function Badge({ type }) {
  const color = typeColors[type.name];

  return (
    <Container color={color}>
      <TypeSvg height={15} width={15} fill="#fff" />
      <TextBadge>{type.name}</TextBadge>
    </Container>
  );
}
