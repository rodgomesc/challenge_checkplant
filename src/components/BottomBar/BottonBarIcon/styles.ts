import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  border: 1px solid rgba(137, 255, 226, 0.6);
  border-radius: 32.5px;
`;

export const NumPopOver = styled.Text`
  background: red;
  font-size: 12px;
  color: #fff;
  height: 18px;
  width: 18px;
  border-radius: 9px;
  text-align: center;
  align-self: flex-end;
  position: absolute;
`;
