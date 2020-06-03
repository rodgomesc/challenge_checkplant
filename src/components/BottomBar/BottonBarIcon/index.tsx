import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Neomorph } from 'react-native-neomorph-shadows';

import { Container, NumPopOver } from './styles';

Icon.loadFont();
interface BottonBarIconProps {
  name: string;
  onPress?: () => void;
  numIndicator?: number | null;
}
const BottonBarIcon: React.FC<BottonBarIconProps> = ({
  name,
  onPress,
  numIndicator,
}) => {
  return (
    <Container onPress={onPress}>
      <Neomorph
        swapShadows
        darkShadowColor="rgba(0,0,0,.1)" // <- set this
        style={{
          shadowOpacity: 1,
          shadowRadius: 6,
          shadowOffset: { width: 3, height: 3 },
          borderRadius: 32.5,
          backgroundColor: '#ecf0f3',
          width: 65,
          height: 65,
        }}
      >
        {!!numIndicator && <NumPopOver>{numIndicator}</NumPopOver>}

        <Icon
          style={{
            marginTop: 'auto',
            marginBottom: 'auto',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          name={name}
          size={40}
          color="#54cfaf"
        />
      </Neomorph>
    </Container>
  );
};

export default React.memo(BottonBarIcon);
