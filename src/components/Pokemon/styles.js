import styled from 'styled-components/native';
import Pokeball from '../../assets/patterns/pokeball.svg';
import Box6x3 from '../../assets/patterns/Box6x3.svg';
import Pokemon001 from '../../assets/pokemon/001.svg';

export const Container = styled.View`
  height: 140px;
  width: 100%;
  justify-content: flex-end;
`;

export const PokeballSvg = styled(Pokeball).attrs({
  fill: '#ffffff4d',
  width: 130,
  height: 130,
})`
  position: absolute;
  right: -12px;
  top: -12px;
`;

export const Box6x3Svg = styled(Box6x3).attrs({
  fill: '#ffffff4d',
  width: 74,
  height: 32,
})`
  position: absolute;
  left: 90px;
  top: 5px;
`;

export const Pokemon001Svg = styled(Pokemon001).attrs({
  fill: '#ffffff4d',
  width: 130,
  height: 130,
})`
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

export const Content = styled.View`
  height: 115px;
  width: 100%;
  background: #8BBE8A;
  border-radius: 10px;
  elevation: 10;
  
`;

export const Info = styled.View`
  padding: 20px;
`;

export const NumberText = styled.Text`  
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  color: #17171b9c;
`;

export const NameText = styled.Text`
  font-weight: bold;
  font-size: 26px;
  line-height: 31px;
  color: #FFFFFF;
  margin-bottom: 5px;
`;

export const Badges = styled.View`
  flex-direction: row;
`;
