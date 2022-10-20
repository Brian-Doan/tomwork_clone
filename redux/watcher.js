import {all} from 'redux-saga/effects';

import {watcherTasks} from '../ChiTietNhiemVu/controllers/watcherTasks';

export default function* rootWatcher() {
  yield all([watcherTasks()]);
}
