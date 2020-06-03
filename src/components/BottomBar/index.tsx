import React from 'react';
import BottomBarIcon from './BottonBarIcon';

import { Container } from './styles';

interface BottomBarProps {
  onCloudPress: () => void;
  onNotePress: () => void;
  numIndicator?: number;
}

const BottomBar: React.FC<BottomBarProps> = ({
  onCloudPress,
  onNotePress,
  numIndicator,
}) => {
  return (
    <Container>
      <BottomBarIcon
        numIndicator={numIndicator}
        onPress={onCloudPress}
        name="cloud-sync"
      />
      <BottomBarIcon name="book-multiple-plus" onPress={onNotePress} />
    </Container>
  );
};

export default React.memo(BottomBar);
