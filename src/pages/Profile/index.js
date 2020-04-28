import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import TabsScreen from '../../routes/tabs';

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
  const [tabActive, setTabActive] = useState('about');

  function navigateBetweenTabs(tab) {
    navigation.navigate(tab);
    setTabActive(tab);
  }

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

          <ButtonNavigateTab onPress={() => navigateBetweenTabs('About')}>
            {tabActive === 'About' && (<PokeballSvg />)}
            <ButtonNavigateTabText active={tabActive === 'About'}>About</ButtonNavigateTabText>
          </ButtonNavigateTab>

          <ButtonNavigateTab onPress={() => navigateBetweenTabs('Stats')}>
            {tabActive === 'Stats' && (<PokeballSvg />)}
            <ButtonNavigateTabText active={tabActive === 'Stats'}>Stats</ButtonNavigateTabText>
          </ButtonNavigateTab>

          <ButtonNavigateTab onPress={() => navigateBetweenTabs('Evolution')}>
            {tabActive === 'Evolution' && (<PokeballSvg />)}
            <ButtonNavigateTabText active={tabActive === 'Evolution'}>Evolution</ButtonNavigateTabText>
          </ButtonNavigateTab>

        </TabHeader>
        <TabContent>
          <TabsScreen />
        </TabContent>
      </Tabs>
    </Container>
  );
}
