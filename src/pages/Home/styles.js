import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import SortComponent from '../../components/Sort';

import Pokeball from '../../assets/patterns/pokeball.svg';
import Filter from '../../assets/icons/filter.svg';
import Sort from '../../assets/icons/sort.svg';
import Generation from '../../assets/icons/generation.svg';

export const Container = styled.View`
  /* background: #FFFFFF; */
  background: #00000040;
  height: 100%;
`;

export const Content = styled.View`
  height: 100%;
  padding: 40px 40px 0 40px;
`;

export const PokeballSvg = styled(Pokeball).attrs({
  // fill: '#F5F5F5',
  fill: '#b9b9b9',
  width: Dimensions.get('screen').width,
  height: Dimensions.get('screen').width,
})`
  position: absolute;
  top: ${(Dimensions.get('screen').width / 2) * -1}px;
`;

export const FilterSvg = styled(Filter).attrs({
  fill: '#17171B',
  width: 25,
  height: 25,
})`
  margin-left: 25px;
`;

export const SortSvg = styled(Sort).attrs({
  fill: '#17171B',
  width: 25,
  height: 25,
})`
  margin-left: 25px;
`;

export const GenerationSvg = styled(Generation).attrs({
  fill: '#17171B',
  width: 25,
  height: 25,
})`
  margin-left: 25px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 35px;
`;

export const Title = styled.Text`
  color: #17171B;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
`;

export const Description = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #747476;
  margin-top: 10px;
  margin-bottom: 25px;
`;

export const ListPokemon = styled.ScrollView`
  flex-direction: column;
`;

export const SortContainer = styled(SortComponent)`
   position: absolute;
   bottom: 0;
`;
