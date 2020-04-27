import React from 'react';

import SearchInput from '../../components/SearchInput';
import Pokemon from '../../components/Pokemon';

import {
  Container,
  PokeballSvg,
  Title,
  Description,
  Header,
  FilterSvg,
  SortSvg,
  GenerationSvg,
  ListPokemon,
} from './styles';

export default function Home({ navigation }) {
  function navigateToProfile() {
    navigation.navigate('Profile');
  }

  return (
    <Container>
      <PokeballSvg />
      <Header>
        <GenerationSvg />
        <SortSvg />
        <FilterSvg />
      </Header>
      <Title>Pokédex</Title>
      <Description>Search for Pokémon by name or using the National Pokédex number.</Description>
      <SearchInput />
      <ListPokemon>
        <Pokemon onPress={navigateToProfile} />
        <Pokemon />
        <Pokemon />
      </ListPokemon>
    </Container>
  );
}
