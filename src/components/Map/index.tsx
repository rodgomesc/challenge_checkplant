import React from 'react';
import { View } from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import CustomMarker from './Marker';
// import { Container } from './styles';

const Map: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude: -27.210753,
          longitude: -49.644183,
          latitudeDelta: 0.0143,
          longitudeDelta: 0.0134,
        }}
        //showsUserLocation
        loadingEnabled
      >
        <Marker coordinate={{ latitude: -27.210753, longitude: -49.644183 }}>
          <CustomMarker />
        </Marker>
      </MapView>
    </View>
  );
};

export default Map;
