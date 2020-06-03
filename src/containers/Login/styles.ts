import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #ecf0f3;
`;

export const WaveWrapper = styled.ImageBackground.attrs({
  blurRadius: 0.7,
})`
  align-items: center;
  flex: 1;
  height: 40%;
`;

export const WaveText = styled.Text`
  color: #fff;
  font-size: 28px;
  margin-top: 100px;
  letter-spacing: 5px;
`;

export const LogoWrapper = styled.Image`
  position: absolute;
  bottom: -40px;
`;

export const InputWrapper = styled.View`
  margin: 50px 20px 0;
`;

export const Input = styled.TextInput`
  margin-top: 25px;
  padding: 10px 15px;
  border: 2px solid #54cfaf;
  border-radius: 10px;
`;

export const SigninButton = styled.TouchableOpacity`
  background: #54cfaf;
  height: 55px;
  margin: 35px 20px;
  border-radius: ${55 / 2}px;
`;

export const SigninButtonText = styled.Text`
  margin: auto auto;
  color: #fff;
`;
