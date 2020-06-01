import React from 'react';
import pinActive from '../../../assets/img/pin_active.png';
import pinInactive from '../../../assets/img/pin_inactive.png';

import { Container, CustomMarker } from './styles';

interface MarkerProps {
  synced?: boolean;
}

const Marker: React.FC<MarkerProps> = ({ synced }) => {
  return (
    <Container>
      <CustomMarker source={synced ? pinInactive : pinActive} />
    </Container>
  );
};

Marker.defaultProps = {
  synced: false,
};

export default Marker;
