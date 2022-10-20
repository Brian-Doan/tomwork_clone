const initialState = {
  stages: {
    stage_1: {
      id: 'stage_1',
      is_done: true,
      is_fail: false,
      name: 'Giai đoạn 1',
    },
    stage_2: {
      id: 'stage_2',
      is_done: false,
      is_fail: false,
      name: 'Giai đoạn 2',
    },
    stage_3: {
      id: 'stage_3',
      is_done: false,
      is_fail: true,
      name: 'Giai đoạn 3',
    },
  },
};

const stageStoreReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {...state};
  }
};

export default stageStoreReducer;
