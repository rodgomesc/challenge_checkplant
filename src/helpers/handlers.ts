import { PermissionsAndroid } from 'react-native';

export const requestLocationPermission = async () => {
  try {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Alerta',
        message:
          'Checkplant está solicitando permissão para acessar permissão de forma precisa',
        buttonPositive: 'OK',
      },
    );
  } catch (err) {
    console.warn(err);
  }
};

// return only unsynced annotations
export const filterNotSyncedAnnotations = (book: any) => {
  return book.annotations.filter((annotation: any) => !annotation.synced);
};
