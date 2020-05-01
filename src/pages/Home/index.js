import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';

import api from '../../services/api';
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
  const [pokemons, setPokemons] = useState([]);
  const [menuActived, setMenuActived] = useState();

  async function loadPokemons() {
    const response = await api.get('pokemon');
    const { results } = response.data;
    setPokemons(results);
  }

  useEffect(() => {
    loadPokemons();
  }, []);

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
        <ListPokemon
          data={pokemons}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <Pokemon pokemon={item} />
          )}
        />

      </Content>
      {menuActived === 'sort' && (<SortContainer />)}

    </Container>
  );
}
