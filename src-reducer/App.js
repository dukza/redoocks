import React,{useReducer} from 'react';

const INCREMENT = 'increment';
const DECREMENT = 'decrement';

const reducer = (state, action) => 
{
  console.log(state, action)
  return {count:99}
  // switch (action) {
  //   case INCREMENT:
  //     return {count: state.count + 1};
  //   case DECREMENT:
  //     return {count: state.count - 1};
  //   default:
  //     throw new Error();
  // }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {count: 0});
  return ( 
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch(INCREMENT)}>-</button>
      <button onClick={() => dispatch(DECREMENT)}>+</button>
      {/* <button onClick={() => dispatch(INCREMENT)}>-</button> */}
      {/* <button onClick={() => dispatch(DECREMENT)}>+</button> */}
    </>
  );
}
export default App;
