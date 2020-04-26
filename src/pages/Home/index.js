import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';
import Pokeball from '../../assets/patterns/pokeball.svg';

export default function Home() {
  const color = '#aaa';
  return (
    <View>
      <Pokeball
        fill={color}

        width={320}
        height={320}
      />
    </View>
  );
}
