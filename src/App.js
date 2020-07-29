import React,{useState, useReducer} from 'react';
import reducer,{initialState, ADD, DEL , COMPLETE, UNCOMPLETE} from './reducer';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [addTodo,setToDo] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({type:ADD,  payload: addTodo})
    setToDo("");
  }
  const onChange = (e) => {
    const {target:{value}}= e;
    setToDo(value);
  }

  return (
    <>
      <h3>Add To Do</h3>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Write To Do" name="writeToDo"
        onChange={onChange}
        value={addTodo}
        />
      </form>
      <h2>To Do</h2>
      <ul>
        {state.toDos.map((toDo) => 
        <li key={toDo.id}>
          <span>{toDo.text}</span>
          <button onClick={() => dispatch({type:DEL, payload:toDo.id})}>❌</button>
          <button onClick={() => dispatch({type:COMPLETE, payload:toDo.id})}>😄</button>
        </li>)}
      </ul>
      {state.completed.length > 0 && 
        <>
          <h2>Completed</h2>
          <ul>
          {state.completed.map((completed) => 
          <li key={completed.id}>
            <span>{completed.text}</span>
            <button onClick={() => dispatch({type:DEL, payload:completed.id})}>❌</button>
            <button onClick={() => dispatch({type:COMPLETE, payload:completed.id})}>❌</button>
          </li>)} 
          </ul>           
        </>
      }
      {state.completed.length > 0 && 
        <>
          <h2>Completed</h2>
          <ul>
          {state.completed.map((completed) => 
          <li key={completed.id}>
            <span>{completed.text}</span>
            <button onClick={() => dispatch({type:DEL, payload:completed.id})}>❌</button>
            <button onClick={() => dispatch({type:COMPLETE, payload:completed.id})}>❌</button>
          </li>)} 
          </ul>           
        </>
      }
    </>
  );
}
export default App;
