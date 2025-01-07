// saga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_DATA_REQUEST, fetchDataSuccess } from './actions';

// Simulate an API call
function* fetchData() {
  try {
    const response = yield call(() => Promise.resolve('Sample Data from API')); // Replace with real API call
    yield put(fetchDataSuccess(response));
  } catch (error) {
    console.error('Fetch failed:', error);
  }
}

export function* nbexPlanSaga() {
  yield takeLatest(FETCH_DATA_REQUEST, fetchData);
}
