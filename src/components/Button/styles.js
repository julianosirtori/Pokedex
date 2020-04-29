import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 60px;
  width: 100%;
  max-width: 334px;
  background: ${((props) => (props.active ? '#EA5D60' : '#F2F2F2'))} ;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  color: ${((props) => (props.active ? '#FFFFFF' : '#747476'))} ;
`;
