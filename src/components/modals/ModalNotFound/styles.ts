import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  border-radius: 10px;
  height: 230px;
  padding: 55px 15px;
  align-items: center;
`;

export const ModalTitle = styled.Text`
  font-size: 28px;
  color: #8a8a8a;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const ModalSubTitle = styled.Text`
  text-align: center;
`;

export const ModalButton = styled.TouchableOpacity`
  border: 2px solid #89ffe2;
  width: 100%;
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
