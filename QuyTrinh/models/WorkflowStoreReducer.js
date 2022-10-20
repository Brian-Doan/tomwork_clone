const initialState = {
  workflows: {
    workflow_1: {
      id: 'workflow_1',
      name: 'Quy trình RN 1',
    },
  },
};

const workflowStoreReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {...state};
  }
};

export default workflowStoreReducer;
