import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const INITIAL_STATE = {
  data: [],
  completed: []
};

function courses(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_COURSE':
      let newTask = {
        id: state.data.length,
        title: action.title
      }
      return { ...state, data: [...state.data, newTask] };
    case 'REMOVE_COURSE':
      return { ...state, data: state.data.filter(e => e.id != action.id) }
    case 'ADD_TASK_TO_COMPLETE':
      let selectedItem = state.data.filter(e => e.id === action.id);
      return {
        ...state,
        data: state.data.filter(e => e.id != action.id),
        completed: [...state.completed, selectedItem[0]]
      };
    default:
      return state;
  }
}
const persistConfig = {
  key: 'root',
  storage
};


const persistedReducer = persistReducer(persistConfig, courses);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export default store;

