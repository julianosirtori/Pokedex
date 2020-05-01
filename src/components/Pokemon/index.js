import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Badge from '../Badge';
import backgroundColor from '../../styles/backgroundColor';

import {
  Container,
  Content,
  NumberText,
  Info,
  PokeballSvg,
  NameText,
  Badges,
  Box6x3Svg,
  ImagePokemon,
} from './styles';

export default function Pokemon({ pokemon, ...props }) {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [types, setTypes] = useState([]);
  const [background, setBackground] = useState('#8BBE8A');

  async function loadSpecie(specie) {
    const response = await api.get(`pokemon-species/${specie}`);
    const { data } = response;
    setBackground(backgroundColor[data.color.name]);
  }

  async function loadPokemon() {
    const response = await api.get(`pokemon/${pokemon.name}`);
    const { data } = response;
    setId(data.id);
    setName(data.name);
    setTypes(data.types);
    loadSpecie(data.species.name);
  }

  useEffect(() => {
    loadPokemon();
  }, []);

  return (
    <Container {...props}>

      <Content backgroundColor={background}>
        <Info>
          <NumberText>{id}</NumberText>
          <NameText>{name}</NameText>
          <Badges>
            {types.map((item) => (
              <Badge key={item.type.name} type={item.type} />
            ))}
          </Badges>
        </Info>
        <PokeballSvg />
        <ImagePokemon source={{
          uri: `https://www.serebii.net/art/th/${id}.png`,
        }}
        />


        <Box6x3Svg />
      </Content>

    </Container>
  );
}
