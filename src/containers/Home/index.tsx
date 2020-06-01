import React from 'react';
import { View } from 'react-native';
import Map from '../../components/Map';
import BottomBar from '../../components/Map/BottomBar';

const Home: React.FC = () => {
  return (
    <Map>
      <BottomBar />
    </Map>
  );
};

export default Home;
