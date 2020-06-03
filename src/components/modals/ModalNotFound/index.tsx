import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { BlurView } from '@react-native-community/blur';
import { Platform } from 'react-native';
import LottieView from 'lottie-react-native';
import notFoundAnimation from '../../../assets/animations/notFound.json';

import Modal from 'react-native-modal';
import {
  Container,
  ModalTitle,
  ModalSubTitle,
  ModalButton,
  ModalButtonText,
} from './styles';

const SucessfulyModal: React.FC = forwardRef(
  ({ title, subtitle }, ref): any => {
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
        customBackdrop={
          <BlurView blurType="dark" blurAmount={10} style={{ flex: 1 }} />
        }
      >
        <Container>
          <LottieView
            source={notFoundAnimation}
            autoPlay
            style={{
              alignSelf: 'center',
              position: 'absolute',
              marginTop: Platform.select({ android: -120, ios: -10 }),
              marginLeft: Platform.select({ android: -2, ios: -16 }),
            }}
          />
          <ModalTitle>{title}</ModalTitle>
          <ModalSubTitle>{subtitle}</ModalSubTitle>
          <ModalButton onPress={() => close()}>
            <ModalButtonText>OK</ModalButtonText>
          </ModalButton>
        </Container>
      </Modal>
    );
  },
);

export default SucessfulyModal;
