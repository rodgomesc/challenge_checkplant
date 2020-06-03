import React, { useState, useEffect } from 'react';
import geolocation from 'react-native-geolocation-service';
import MapView, { Marker, Callout } from 'react-native-maps';
import { View } from 'react-native';
import CustomMarker from './Marker';
import {
  mapStyle,
  CustomCallOutView,
  AnnotationDate,
  SyncedStatus,
  LatStatus,
  LongStatus,
  DateStatus,
} from './styles';
import { parseISO, formatDistance, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

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
            <Callout tooltip>
              <CustomCallOutView>
                <AnnotationDate>
                  há{' '}
                  {formatDistance(new Date(note.datetime), new Date(), {
                    locale: pt,
                  })}
                  {'...'}
                </AnnotationDate>

                <SyncedStatus>
                  Sincronizado: {note.synced ? 'Sim' : 'Não'}
                </SyncedStatus>
                <LatStatus>Latitude: {note.latitude.toFixed(4)}</LatStatus>
                <LongStatus>longitude: {note.longitude.toFixed(4)}</LongStatus>
                <DateStatus>
                  Criado em: {format(new Date(note.datetime), 'dd/MM/yyyy')}
                </DateStatus>
              </CustomCallOutView>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

export default React.memo(Map);
