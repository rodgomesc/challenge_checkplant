import React, { useState } from 'react';
import { BlurView } from '@react-native-community/blur';

import Modal from 'react-native-modal';
import { Container } from './styles';

const SucessfulyModal: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  return (
    <Modal
      isVisible={isModalVisible}
      customBackdrop={
        <BlurView blurType="dark" blurAmount={10} style={{ flex: 1 }} />
      }
    >
      <Container></Container>
    </Modal>
  );
};

export default SucessfulyModal;
