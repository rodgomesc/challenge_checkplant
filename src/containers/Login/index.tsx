import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import logo from '../../assets/img/logo.png';
import loginWave from '../../assets/img/wave.png';

import {
  Container,
  WaveWrapper,
  LogoWrapper,
  Input,
  InputWrapper,
  SigninButton,
  SigninButtonText,
  WaveText,
} from './styles';

const Signin: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <StatusBar translucent backgroundColor="transparent" />
      <WaveWrapper source={loginWave}>
        <WaveText>CHECKPLANT</WaveText>
        <LogoWrapper source={logo} />
      </WaveWrapper>
      <InputWrapper>
        <Input label="LOGIN" placeholder="Digite seu Usuário" />
        <Input label="SENHA" secureTextEntry placeholder="Digite sua Senha" />
      </InputWrapper>
      <SigninButton onPress={() => navigation.navigate('Home')}>
        <SigninButtonText>Entrar</SigninButtonText>
      </SigninButton>
    </Container>
  );
};

export default Signin;
