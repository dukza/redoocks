import { v4 as uuidv4 } from 'uuid';

export const initialState = {
  toDos:[],
  completed: []
};

export const ADD = 'add';
export const DEL = 'del';
export const COMPLETE = 'complete';
export const UNCOMPLETE = "uncomplete";

const reducer = (state, action) => {
  switch(action.type){
    case ADD:
      return {
        ...state,
        toDos: [...state.toDos, { text: action.payload, id: uuidv4() }]
      };
    case DEL:
      return {
        ...state,
        toDos: state.toDos.filter(toDo => toDo.id !== action.payload)
      };
    case COMPLETE:
      const target = state.toDos.find(toDo => toDo.id === action.payload);
      return {
        ...state,
        completed: [...state.completed, { text: action.payload, id: uuidv4() }]
      };
    case UNCOMPLETE:
      const aTarget = state.completed.find(toDo => toDo.id === action.payload);
      return {
        ...state,
        completed: state.completed.filter(toDo => toDo.id !== action.payload),
        toDos: [...state.toDos, { ...aTarget }]
      };
    default:
      return;
  }  
}
export default reducer;
