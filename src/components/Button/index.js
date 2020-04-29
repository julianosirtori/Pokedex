import React from 'react';

import { Container, TextButton } from './styles';

export default function Button({ active, children, ...props }) {
  return (
    <Container {...props} active={active ? 1 : 0}>
      <TextButton active={active ? 1 : 0}>{children}</TextButton>
    </Container>
  );
}
