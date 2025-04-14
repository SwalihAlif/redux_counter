import React from "react";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux Counter</h1>
      <h2>Count: {count}</h2>
      <button onClick={() =>  dispatch({type: 'Increment'})}>Increment</button>
      <button onClick={() => count > 0 && dispatch({type: "Decrement"})}>Decrement</button>
    </div>
  )
}

export default App;