import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { increment } from './Redux/filmSlice';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.films.value);

  return (
    <div className="App">
      {data}
      <button
        onClick={() => dispatch(increment())}
      >+</button>
    </div>
  );
}

export default App;
