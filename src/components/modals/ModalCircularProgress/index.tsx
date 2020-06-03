import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { BlurView } from '@react-native-community/blur';

import AnimatedCircularProgress from 'react-native-conical-gradient-progress';

import Modal from 'react-native-modal';
import {
  Container,
  PercentageText,
  CircularContentWrapper,
  ProgressSubTitle,
} from './styles';

interface ModalCircularProgressProps {
  subtitle?: string;
  fill?: number;
  ref?: any;
}

const ModalCircularProgress: React.FC<ModalCircularProgressProps> = forwardRef(
  ({ subtitle, fill }, ref) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    useImperativeHandle(ref, () => ({
      open: () => setIsModalVisible(true),
      close: () => setIsModalVisible(false),
    }));
    return (
      <Modal
        isVisible={isModalVisible}
        customBackdrop={
          <BlurView blurType="dark" blurAmount={10} style={{ flex: 1 }} />
        }
      >
        <Container>
          <AnimatedCircularProgress
            isClockwise={true}
            size={187}
            width={25}
            fill={fill}
            prefill={100}
            beginColor="#0f803e"
            endColor="#79ffdc"
            segments={21}
            backgroundColor="rgba(255, 255, 255, 0.2)"
            linecap="round"
          >
            {(fill: number) => (
              <CircularContentWrapper>
                <PercentageText>{fill.toFixed(0)}%</PercentageText>
              </CircularContentWrapper>
            )}
          </AnimatedCircularProgress>
          <ProgressSubTitle>{subtitle}</ProgressSubTitle>
        </Container>
      </Modal>
    );
  },
);

ModalCircularProgress.defaultProps = {
  fill: 0,
};

export default ModalCircularProgress;
