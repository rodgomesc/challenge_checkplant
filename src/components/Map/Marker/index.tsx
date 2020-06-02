import React from 'react';
import {View} from 'react-native';
import mapDropAnimation from '../../../assets/animations/map-drop3.json';
import LottieView from 'lottie-react-native';
// import { Container } from './styles';

const Marker: React.FC = () => {
  return (
    <LottieView
      style={{height: 80, marginBottom: 10}}
      source={mapDropAnimation}
      autoPlay
      loop
      speed={2}
    />
  );
};

export default Marker;
