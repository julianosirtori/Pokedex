import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Header,
  Box10x5Svg,
  TitleHeader,
  Tabs,
  TabHeader,
  ButtonNavigateTabText,
  TabContent,
  ButtonNavigateTab,
  PokeballSvg,
} from './styles';

export default function Profile({ navigation }) {
  return (
    <Container>
      <Box10x5Svg />
      <Header>
        <TouchableOpacity onPress={() => { navigation.goBack(); }}>
          <Icon name="arrow-back" size={25} color="#fff" />
        </TouchableOpacity>

        <TitleHeader>Bulbasaur</TitleHeader>
      </Header>
      <Tabs>
        <TabHeader>
          <ButtonNavigateTab>
            <PokeballSvg />
            <ButtonNavigateTabText active={1}>About</ButtonNavigateTabText>
          </ButtonNavigateTab>
          <ButtonNavigateTab>
            {false && (<PokeballSvg />)}
            <ButtonNavigateTabText>Stats</ButtonNavigateTabText>
          </ButtonNavigateTab>
          <ButtonNavigateTab>
            {false && (<PokeballSvg />)}
            <ButtonNavigateTabText>Evolution</ButtonNavigateTabText>
          </ButtonNavigateTab>
        </TabHeader>
        <TabContent />
      </Tabs>
    </Container>
  );
}
