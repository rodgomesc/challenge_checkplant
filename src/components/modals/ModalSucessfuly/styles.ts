import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  border-radius: 10px;
  height: 200px;
`;

export const ModalTitle = styled.Text`
  margin: 15px auto 0 auto;
  font-weight: bold;
  font-size: 22px;
`;

export const ModalContentText = styled.Text`
  margin: 55px 20px 0;
`;

export const ModalButton = styled.TouchableOpacity`
  border: 2px solid #89ffe2;
  margin: 15px;
  min-height: 48px;
  border-radius: 10px;
`;

export const ModalButtonText = styled.Text`
  margin: auto;
  font-size: 14px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1px;
  font-weight: bold;
  color: #89ffe2;
`;
