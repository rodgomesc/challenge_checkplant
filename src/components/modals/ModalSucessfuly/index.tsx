import React, { useState, forwardRef, useImperativeHandle } from 'react';

import { Platform } from 'react-native';
import { BlurView } from '@react-native-community/blur';

import LottieView from 'lottie-react-native';
import doneAnimation from '../../../assets/animations/done2';

import Modal from 'react-native-modal';
import {
  Container,
  ModalTitle,
  ModalContentText,
  ModalButton,
  ModalButtonText,
} from './styles';

const ModalSucessfuly = forwardRef((props, ref) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const open = () => setIsModalVisible(true);
  const close = () => setIsModalVisible(false);

  useImperativeHandle(ref, () => ({
    open,
    close,
  }));

  return (
    <Modal
      isVisible={isModalVisible}
      onBackButtonPress={() => setIsModalVisible(false)}
      customBackdrop={
        <BlurView blurType="dark" blurRadius={25} style={{ flex: 1 }} />
      }
    >
      <Container>
        <LottieView
          style={{
            //borderStyle: 'solid',
            //borderColor: 'red',
            // borderWidth: 1,
            height: 200,
            position: 'absolute',
            marginTop: Platform.select({ android: -25, ios: -10 }),
            marginLeft: Platform.select({ android: -26, ios: -16 }),
            transform: [{ rotate: '-7deg' }],
          }}
          source={doneAnimation}
          autoSize
          autoPlay
          loop={false}
          speed={0.6}
        />
        <ModalTitle>Tudo Certo</ModalTitle>
        <ModalContentText>
          As Anotações foram sincronizadas com sucesso!
        </ModalContentText>
        <ModalButton onPress={() => close()}>
          <ModalButtonText>Ok</ModalButtonText>
        </ModalButton>
      </Container>
    </Modal>
  );
});

export default ModalSucessfuly;
