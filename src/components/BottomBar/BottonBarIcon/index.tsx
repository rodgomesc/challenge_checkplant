import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Neomorph } from 'react-native-neomorph-shadows';

import { Wrapper, Container, NumPopOver, Title } from './styles';

Icon.loadFont();
interface BottonBarIconProps {
  name: string;
  title: string;
  onPress?: () => void;
  numIndicator?: number | null;
}
const BottonBarIcon: React.FC<BottonBarIconProps> = ({
  name,
  title,
  onPress,
  numIndicator,
}) => {
  return (
    <Container>
      <Wrapper onPress={onPress}>
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
      </Wrapper>
      <Title>{title}</Title>
    </Container>
  );
};

export default React.memo(BottonBarIcon);
