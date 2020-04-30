import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import SearchInput from '../../components/SearchInput';
import Pokemon from '../../components/Pokemon';

import {
  Container,
  Content,
  PokeballSvg,
  Title,
  Description,
  Header,
  FilterSvg,
  SortSvg,
  GenerationSvg,
  ListPokemon,
  SortContainer,
} from './styles';

export default function Home({ navigation }) {
  const [menuActived, setMenuActived] = useState();

  function navigateToProfile() {
    navigation.navigate('Profile');
  }

  return (
    <Container>
      <Content>
        <PokeballSvg />
        <Header>
          <TouchableOpacity onPress={() => setMenuActived('generations')}>
            <GenerationSvg />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setMenuActived('sort')}>
            <SortSvg />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setMenuActived('filter')}>
            <FilterSvg />
          </TouchableOpacity>

        </Header>
        <Title>Pokédex</Title>
        <Description>Search for Pokémon by name or using the National Pokédex number.</Description>
        <SearchInput />
        <ListPokemon>
          <Pokemon onPress={navigateToProfile} />
          <Pokemon />
          <Pokemon />
        </ListPokemon>
      </Content>
      {menuActived === 'sort' && (<SortContainer />)}

    </Container>
  );
}
