import React, { useEffect, useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import Map from '../../components/Map';

import BottomBar from '../../components/BottomBar';
import ModalCircularProgress from '../../components/modals/ModalCircularProgress';

import { filterNotSyncedAnnotations } from '../../helpers/handlers';

import { updateSyncedAnnotations } from '../../store/modules/book/actions';

import { useSelector, useDispatch } from 'react-redux';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const notSyncedAnnotations = filterNotSyncedAnnotations(
    useSelector((state: any) => state.book),
  );

  const dispath = useDispatch();
  const [syncProgress, setSyncProgress] = useState(0);
  const modalRef = useRef(null);
  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms)); // simulate a api delay

  var syncedAnnotations: any = [];

  const onApiRequest = async (index: number, note: any) => {
    setSyncProgress(((index + 1) / notSyncedAnnotations.length) * 100);
    await delay(800); // simulate a api delay of 800ms for each request
    syncedAnnotations.push(note.id);
  };

  const onRequestFinish = () => {
    dispath(updateSyncedAnnotations(syncedAnnotations));
    modalRef.current.close();
    setSyncProgress(0);
  };

  const handleCloudPress = async () => {
    modalRef.current.open();

    for (const [idx, note] of notSyncedAnnotations.entries()) {
      await onApiRequest(idx, note);
    }

    onRequestFinish();
  };

  return (
    <>
      <ModalCircularProgress
        subtitle="Sincronização em Andamento..."
        fill={syncProgress}
        ref={modalRef}
      />
      <Map />
      <BottomBar
        numIndicator={notSyncedAnnotations?.length}
        onCloudPress={() => handleCloudPress()}
        onNotePress={() => navigation.navigate('Notes')}
      />
    </>
  );
};

export default Home;
