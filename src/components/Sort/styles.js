import styled from 'styled-components/native';
import { Animated } from 'react-native';
import Button from '../Button';

export const Container = styled.View`
  height: 100%;
  width: 100%;
  background: #00000040;
`;

export const Content = styled(Animated.View)`
  background: #fff;
  position: absolute;
  height: 480px;
  bottom: 0px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 30px 40px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 26px;
  margin-bottom: 5px;
`;

export const Description = styled.Text`
 font-size: 16px;
  line-height: 19px;
  margin-bottom: 35px;
  color: #747476;
`;

export const ButtonStyled = styled(Button)`
  margin-bottom: 20px;
  elevation: 5;
`;
