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
        title="Sincronizar"
        numIndicator={numIndicator}
        onPress={onCloudPress}
        name="cloud-sync"
      />
      <BottomBarIcon
        title="Nova Anotação"
        name="book-multiple-plus"
        onPress={onNotePress}
      />
    </Container>
  );
};

export default React.memo(BottomBar);
