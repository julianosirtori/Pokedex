import React from 'react';

import TypeSvg from '../../assets/types/grass.svg';
import { Container, TextBadge } from './styles';

export default function Badge({ children, color, type }) {
  return (
    <Container color={color}>
      <TypeSvg height={15} width={15} fill="#fff" />
      <TextBadge>{children}</TextBadge>
    </Container>
  );
}
