import * as ActionType from '../controllers/actionTypes';

const initialState = {
  tasks: {
    task_1: {
      id: 1,
      task_id: 'task_1',
      stage_id: 'stage_1',
      workflow_id: 'workflow_1',
      name: 'Nhiệm vụ 1',
      deadline: '20/10/2022',
      priority: 'Important',
    },
    task_2: {
      id: 2,
      task_id: 'task_2',
      stage_id: 'stage_1',
      workflow_id: 'workflow_1',
      name: 'Nhiệm vụ 2',
      deadline: '20/10/2022',
      priority: 'Low',
    },
    task_3: {
      id: 3,
      task_id: 'task_3',
      stage_id: 'stage_2',
      workflow_id: 'workflow_1',
      name: 'Nhiệm vụ 3',
      deadline: '20/10/2022',
      priority: '',
    },
    task_4: {
      id: 4,
      task_id: 'task_4',
      stage_id: 'stage_3',
      workflow_id: 'workflow_1',
      name: 'Nhiệm vụ 4',
      deadline: '20/10/2022',
      priority: 'Low',
    },
  },
};

const taskStoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_DETAIL_TASK:
      // console.log('data in TaskStoreReducer:', action.data);
      return {...state, tasks: action.data};
    default:
      return {...state};
  }
};

export default taskStoreReducer;
