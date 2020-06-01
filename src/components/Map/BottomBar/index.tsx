import React from 'react';
import BottomBarIcon from '../BottonBarIcon';
import { useNavigation } from '@react-navigation/native';
import { Container } from './styles';

const BottomBar: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <BottomBarIcon name="cloud-sync" />
      <BottomBarIcon
        name="book-multiple-plus"
        onPress={() => navigation.navigate('Notes')}
      />
    </Container>
  );
};

export default BottomBar;
