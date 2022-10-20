import {combineReducers} from 'redux';
import TaskStoreReducer from '../ChiTietNhiemVu/models/TaskStoreReducer';
import StageStoreReducer from '../ChiTietNhiemVu/models/StageStoreReducer';
import WorkflowStoreReducer from '../QuyTrinh/models/WorkflowStoreReducer';

const rootReducer = combineReducers({
  TaskStoreReducer,
  StageStoreReducer,
  WorkflowStoreReducer,
});

export default rootReducer;
