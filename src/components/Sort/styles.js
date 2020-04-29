import styled from 'styled-components/native';
import Button from '../Button';

export const Container = styled.View`
  height: 300px;
  width: 100%;
  background: transparent;
`;

export const Content = styled.View`
  background: #fff;
  height: 100%;
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
`;
