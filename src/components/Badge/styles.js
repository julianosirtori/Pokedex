import styled from 'styled-components/native';

export const Container = styled.View`
  height: 25px;
  background: ${(props) => props.color};
  border-radius: 3px;
  margin-right: 5px;
  flex-direction: row;
  align-items: center;
  padding: 5px;
`;

export const TextBadge = styled.Text`
  color: #FFFFFF;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  margin-left: 5px;
`;
