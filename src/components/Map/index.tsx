import React, { useState, useEffect } from 'react';
import geolocation from 'react-native-geolocation-service';
import MapView, { Marker } from 'react-native-maps';
import CustomMarker from './Marker';
import { mapStyle } from './styles';
import * as handlers from '../../helpers/handlers';
import { useSelector } from 'react-redux';

const Map: React.FC = () => {
  const { annotations } = useSelector((state: any) => state.book);
  const [currentRegion, setCurrentRegion] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    // when coord changes, set new current region
    async function locationWatch() {
      await handlers.requestLocationPermission();
      await geolocation.watchPosition(
        (position) => {
          console.log('OK');
          const { latitude, longitude } = position.coords;
          setCurrentRegion({
            latitude,
            longitude,
          });
        },
        (e) => console.log(e),
        {
          showLocationDialog: true,
          enableHighAccuracy: true,
        },
      );
    }
    locationWatch();

    return geolocation.stopObserving();
  }, []);
  return (
    <MapView
      style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      customMapStyle={mapStyle}
      region={{
        ...currentRegion,
        latitudeDelta: 0.034,
        longitudeDelta: 0.017,
      }}
      followsUserLocation
      showsUserLocation
      loadingEnabled
    >
      {annotations.map((note: any) => (
        <Marker
          key={note.id}
          title={note.content}
          coordinate={{
            latitude: note.latitude,
            longitude: note.longitude,
          }}
        >
          <CustomMarker synced={note.synced} />
        </Marker>
      ))}
    </MapView>
  );
};

export default Map;
