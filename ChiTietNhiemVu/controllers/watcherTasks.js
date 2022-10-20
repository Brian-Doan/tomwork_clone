import {takeLeading, put, select} from 'redux-saga/effects';

import * as ActionType from './actionTypes';

export function* watcherTasks() {
  yield takeLeading(ActionType.MOVE_NEXT_STAGE, workerMoveNextStage);
  yield takeLeading(ActionType.MOVE_PREV_STAGE, workerMovePrevStage);
}

function* workerMoveNextStage(action) {
  try {
    const {task_id, stage_id} = action.data;
    const taskList = yield select(state => state.TaskStoreReducer.tasks);
    const stageList = yield select(state => state.StageStoreReducer.stages);

    /* Get current stage of selected task */
    const currentStageId = taskList[task_id]['stage_id'].split('_')[1];
    const nextStageId = Object.values(stageList)
      .sort()
      .filter(
        item => Number(item['id'].split('_')[1]) === Number(currentStageId) + 1,
      )[0]['id'];

    let newTaskList = {...taskList};
    let currentTaskFullDetail = taskList[task_id];

    newTaskList = {
      ...newTaskList,
      [task_id]: {...currentTaskFullDetail, ['stage_id']: nextStageId},
    };

    yield put({
      type: ActionType.UPDATE_DETAIL_TASK,
      data: newTaskList,
    });
  } catch (error) {
    console.error(error);
  }
}

function* workerMovePrevStage(action) {
  try {
    const {task_id, stage_id} = action.data;
    const taskList = yield select(state => state.TaskStoreReducer.tasks);
    const stageList = yield select(state => state.StageStoreReducer.stages);

    /* Get current stage of selected task */
    const currentStageId = taskList[task_id]['stage_id'].split('_')[1];
    const prevStageId = Object.values(stageList)
      .sort()
      .filter(
        item => Number(item['id'].split('_')[1]) === Number(currentStageId) - 1,
      )[0]['id'];

    let newTaskList = {...taskList};
    let currentTaskFullDetail = taskList[task_id];

    newTaskList = {
      ...newTaskList,
      [task_id]: {...currentTaskFullDetail, ['stage_id']: prevStageId},
    };

    console.group('== workerMovePrevStage ==');
    console.log('currentStageId : ', currentStageId);
    console.log('prevStageId : ', prevStageId);
    console.groupEnd();

    yield put({
      type: ActionType.UPDATE_DETAIL_TASK,
      data: newTaskList,
    });
  } catch (error) {
    console.error(error);
  }
}
