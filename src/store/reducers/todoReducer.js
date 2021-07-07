const INITIAL_STATE = {
  data: [],
  completed: []
};

function reducer(state = INITIAL_STATE, action) {
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

export default reducer;