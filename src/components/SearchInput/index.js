import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Input } from './styles';

export default function SearchInput() {
  return (
    <Container>
      <Icon name="search" color="#747476" size={16} />
      <Input placeholder="What Pokémon are you looking for?" />
    </Container>
  );
}
