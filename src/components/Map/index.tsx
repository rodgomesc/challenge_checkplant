import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import geolocation from 'react-native-geolocation-service';
import MapView, { Marker } from 'react-native-maps';
import CustomMarker from './Marker';

import { Text } from 'react-native';

// import { Container } from './styles';

const Map: React.FC = ({ children }) => {
  const [currentRegion, setCurrentRegion] = useState({
    latitude: -17.38738738738739,
    longitude: -50.373847943574084,
  });

  useEffect(() => {
    //set initial position when page is loaded
    geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentRegion({
          latitude,
          longitude,
        });
      },
      (error) => console.log(error),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      },
    );
  }, []);

  // when coord changes, set new current region
  geolocation.watchPosition((position) => {
    const { latitude, longitude } = position.coords;
    setCurrentRegion({
      latitude,
      longitude,
    });
  });

  const mapStyle = [
    {
      elementType: 'geometry',
      stylers: [
        {
          color: '#ecf0f3',
        },
      ],
    },
    {
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#616161',
        },
      ],
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#f5f5f5',
        },
      ],
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#bdbdbd',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [
        {
          color: '#eeeeee',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#757575',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [
        {
          color: '#e5e5e5',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9e9e9e',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        {
          color: '#ffffff',
        },
      ],
    },
    {
      featureType: 'road.arterial',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#757575',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [
        {
          color: '#dadada',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#616161',
        },
      ],
    },
    {
      featureType: 'road.local',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9e9e9e',
        },
      ],
    },
    {
      featureType: 'transit.line',
      elementType: 'geometry',
      stylers: [
        {
          color: '#e5e5e5',
        },
      ],
    },
    {
      featureType: 'transit.station',
      elementType: 'geometry',
      stylers: [
        {
          color: '#eeeeee',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#c9c9c9',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9e9e9e',
        },
      ],
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
        customMapStyle={mapStyle}
        region={{
          ...currentRegion,
          latitudeDelta: 0.034,
          longitudeDelta: 0.017,
        }}
        followsUserLocation
        //showsUserLocation
        loadingEnabled
      >
        <Marker
          title="teste"
          coordinate={{
            latitude: -17.38738738738739,
            longitude: -50.373847943574084,
          }}
        >
          <CustomMarker />
        </Marker>
        <Marker
          title="teste"
          coordinate={{
            latitude: -17.38738738738739,
            longitude: -50.373847943574084,
          }}
        >
          <CustomMarker />
        </Marker>
      </MapView>
      {children}
    </View>
  );
};

export default Map;
