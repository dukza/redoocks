import React,{useReducer} from 'react';

const INCREMENT = 'increment';
const DECREMENT = 'decrement';

const reducer = (state, action) => {
  switch (action) {
    case INCREMENT:
      return {count: state.count + 1};
    case DECREMENT:
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {count: 0});
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch(INCREMENT)}>-</button>
      <button onClick={() => dispatch(DECREMENT)}>+</button>
    </>
  );
}
export default App;
