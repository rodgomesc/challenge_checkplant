import { all, AllEffect } from 'redux-saga/effects';

import book from './book/sagas';

export default function* rootSaga(): Generator<AllEffect<any>> {
  return yield all([book]);
}
