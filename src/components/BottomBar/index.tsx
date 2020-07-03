import React from 'react';
import BottomBarIcon from './BottonBarIcon';

import { Container } from './styles';

interface BottomBarProps {
  onCloudPress: () => void;
  onNotePress: () => void;
}

const BottomBar: React.FC<BottomBarProps> = ({ onCloudPress, onNotePress }) => {
  return (
    <Container>
      <BottomBarIcon onPress={onCloudPress} name="cloud-sync" />
      <BottomBarIcon name="book-multiple-plus" onPress={onNotePress} />
    </Container>
  );
};

export default BottomBar;
