import React, { useState } from 'react';
import { Keyboard, Alert } from 'react-native';

import { useDispatch } from 'react-redux';
import { newAnnotation } from '../../store/modules/book/actions';

import avatar from '../../assets/img/avatar.jpeg';
import Map from '../../components/Map';

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
  const dispatch = useDispatch();

  const handleSubmit = () => {
    let annotationObj = {
      latitude: 4645645,
      longitude: 88787,
      annotation: inputValue,
      datetime: new Date(),
    };
    dispatch(newAnnotation(annotationObj));
  };
  return (
    <Container>
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
          <Lat>Lat:123</Lat>
          <Lon>Lot:123</Lon>
        </MapHeaderWrapper>

        <Map />
      </MapWrapper>
      <SaveButton onPress={() => handleSubmit()}>
        <SaveButtonText>Salvar</SaveButtonText>
      </SaveButton>
    </Container>
  );
};

export default Notes;
