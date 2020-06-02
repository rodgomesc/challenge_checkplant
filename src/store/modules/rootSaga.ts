import { all, AllEffect } from 'redux-saga/effects';

import auth from './auth/sagas';

export default function* rootSaga(): Generator<AllEffect<any>> {
  return yield all([auth]);
}
