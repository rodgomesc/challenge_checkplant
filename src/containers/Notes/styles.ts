import styled from 'styled-components/native';
import { Platform } from 'react-native';
export const Container = styled.View`
  margin: 20px 20px 0;
  flex: 1;
`;

export const AvatarWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;
export const AvatarImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 68px;
  height: 68px;
  border-radius: 34px;
`;
export const AvatarContent = styled.View`
  margin-left: 10px;
`;
export const AvatarName = styled.Text`
  color: #8b9dab;
  font-weight: bold;
`;
export const AvatarRole = styled.Text`
  color: #54cfaf;
`;

export const Divider = styled.View`
  border-bottom-width: 1px;
  border-style: solid;
  border-color: #d6dfdd;
  width: 100%;
`;

export const NoteInputWrapper = styled.View`
  margin-top: 20px;
`;
export const NotePlaceHolder = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #a2b9cb;
  margin-bottom: 10px;
`;
export const NoteInput = styled.TextInput.attrs({
  multiline: true,
})`
  background: #eefcf8;
  border: 1px solid #89ffe2;
  height: 140px;
  padding: 10px;
  letter-spacing: 2px;
  border-radius: 10px;
`;
export const MapWrapper = styled.View`
  flex: 1;

  max-height: 300px;
`;

export const MapHeaderWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 12px;
`;

export const Lat = styled.Text`
  color: #8b9dab;
  margin-left: 8px;
`;
export const Lon = styled.Text`
  color: #8b9dab;
  margin-left: 8px;
`;

export const SaveButton = styled.TouchableOpacity`
  background: #54cfaf;
  margin-top: auto;
  margin-bottom: ${Platform.select({ android: '15px', ios: '70px' })};
  height: 54px;
  border-radius: 26px;
`;
export const SaveButtonText = styled.Text`
  margin: auto;
  color: #79ffdc;
  font-size: 16px;
  font-weight: bold;
`;
