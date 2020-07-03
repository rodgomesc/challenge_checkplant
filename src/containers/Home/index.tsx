import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import Map from '../../components/Map';
import BottomBar from '../../components/BottomBar';

import { useSelector, useDispatch } from 'react-redux';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const { annotations } = useSelector((state: any) => state.book);

  const handleCloudPress = () => {
    console.log(annotations);

    const syncedAnnotations = annotations.map((note: any) => {
      return { ...note, synced: true };
    });

    console.log(syncedAnnotations);
  };

  return (
    <>
      <Map />
      <BottomBar
        onCloudPress={() => handleCloudPress()}
        onNotePress={() => navigation.navigate('Notes')}
      />
    </>
  );
};

export default Home;
