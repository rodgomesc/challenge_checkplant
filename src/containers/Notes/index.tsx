import React, { useState, useRef, useEffect } from 'react';
import { Keyboard } from 'react-native';

import * as handlers from '../../helpers/handlers';

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import SucessfulyModal from '../../components/modals/ModalSucessfuly';
import { useDispatch } from 'react-redux';
import { newAnnotation } from '../../store/modules/book/actions';

import avatar from '../../assets/img/avatar.jpeg';
import Map from '../../components/Map';
import geolocation from 'react-native-geolocation-service';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
Icon.loadFont();

import {
  Container,
  AvatarWrapper,
  AvatarImage,
  AvatarContent,
  AvatarName,
  AvatarRole,
  Divider,
  NoteInputWrapper,
  NotePlaceHolder,
  NoteInput,
  MapWrapper,
  MapHeaderWrapper,
  Lat,
  Lon,
  SaveButton,
  SaveButtonText,
} from './styles';

const Notes: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>();
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [currentRegion, setCurrentRegion] = useState({
    latitude: 0,
    longitude: 0,
  });
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const modalRef = useRef(null);

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
          distanceFilter: 5,
          interval: 3000,
          useSignificantChanges: false,
        },
      );
    }
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    locationWatch();

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
      geolocation.stopObserving();
    };
  }, []);

  const handleSubmit = () => {
    // when coord changes, set new current region
    let annotationObj = {
      id: uuidv4(),
      latitude: currentRegion.latitude,
      longitude: currentRegion.longitude,
      content: inputValue,
      datetime: new Date(),
    };

    dispatch(newAnnotation(annotationObj));
    navigation.navigate('Home');
  };

  return (
    <Container>
      <SucessfulyModal ref={modalRef} />

      <AvatarWrapper>
        <AvatarImage source={avatar} />
        <AvatarContent>
          <AvatarName>Rodrigo Gomes da Cunha</AvatarName>
          <AvatarRole>React Native Developer</AvatarRole>
        </AvatarContent>
      </AvatarWrapper>
      <Divider />
      <NoteInputWrapper>
        <NotePlaceHolder>Insira suas anotações abaixo</NotePlaceHolder>
        <NoteInput
          onSubmitEditing={Keyboard.dismiss}
          onChangeText={(txt) => setInputValue(txt)}
          value={inputValue}
        />
      </NoteInputWrapper>
      <MapWrapper>
        <MapHeaderWrapper>
          <Icon name="location-pin" size={28} color="#8B9DAB" />
          <Lat>Lat:{currentRegion.latitude.toFixed(4)}</Lat>
          <Lon>Lot:{currentRegion.longitude.toFixed(4)}</Lon>
        </MapHeaderWrapper>
        {!keyboardVisible && <Map />}
      </MapWrapper>
      <SaveButton onPress={() => handleSubmit()}>
        <SaveButtonText>Salvar</SaveButtonText>
      </SaveButton>
    </Container>
  );
};

export default Notes;
