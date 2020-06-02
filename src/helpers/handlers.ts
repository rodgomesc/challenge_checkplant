import { PermissionsAndroid } from 'react-native';

export async function requestLocationPermission() {
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
}
