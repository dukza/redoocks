import React,{useState, useReducer} from 'react';
import reducer,{initialState, ADD, DEL , COMPLETE, UNCOMPLETE} from './reducer';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newToDo, setNewToDo] = useState("");
  const handleSubmit = (e)=>{
    e.preventDefault();

    dispatch({type:ADD, payload:newToDo})
  }
  const handleChange = (e) => {
    const {target:{value}} = e;
    setNewToDo(value);
  }
  return (
    <>
      <h3>Add To Do</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Write To Do" name="writeToDo"
          onChange={handleChange}
          value={newToDo}
        />
      </form>
      <h3>To Do</h3>
      <ul>
      {state.toDos.map((toDo)=>
      <li key={toDo.id}>
        <span>{toDo.text}</span>
        <button onClick={() => dispatch({ type: DEL, payload: toDo.id })}>❌</button>
        <button onClick={() => dispatch({ type: COMPLETE, payload: toDo.id })}>😄</button>
      </li>)}
      </ul>
      {state.completed.length !== 0 && 
      <>
      <h3>Completed</h3>
      <ul>
        {state.completed.length !== 0 && (
          <>
            <h2>Completed</h2>
            {state.completed.map(toDo => (
              <li key={toDo.id}>
                <span>{toDo.text}</span>
                <span
                  role="img"
                  aria-label=""
                  onClick={() => dispatch({ type: DEL, payload: toDo.id })}
                >
                  ❌
                </span>
                <span
                  role="img"
                  aria-label=""
                  onClick={() =>
                    dispatch({ type: UNCOMPLETE, payload: toDo.id })
                  }
                >
                  🙅🏼‍♂️
                </span>
              </li>
            ))}
          </>
        )}
      </ul>
      </>
      }
    </>
  );
}
export default App;
