import styled from 'styled-components/native';
import Box10x5 from '../../assets/patterns/Box10x5.svg';
import Pokeball from '../../assets/patterns/pokeball.svg';

export const Container = styled.View`
  height: 100%;
  background: #8BBE8A;
`;

export const Box10x5Svg = styled(Box10x5).attrs({
  fill: '#ffffff4d',
  width: 140,
  height: 65,
})`
  position: absolute;
  right: -60px;
  top: 27px;
`;

export const PokeballSvg = styled(Pokeball).attrs({
  fill: '#ffffff2b',
  width: 100,
  height: 100,
})`
  position: absolute;
  top: -12px;
`;

export const Header = styled.View`
  flex-direction: row;
  padding: 40px;
  align-items: center;
`;

export const TitleHeader = styled.Text`  
  flex: 1;
  font-weight: bold;
  font-size: 26px;
  line-height: 31px;
  text-align: center;
  color: #FFFFFF;
`;

export const Tabs = styled.View`
  flex: 1;
`;

export const TabHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 40px 15px 40px; 

`;

export const ButtonNavigateTab = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const ButtonNavigateTabText = styled.Text`
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  opacity: ${(props) => (props.active ? 1 : 0.5)};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};

`;

export const TabContent = styled.View`
  flex: 1;
  background: #fff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;
