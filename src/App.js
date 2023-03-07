import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchFilms, increment } from './Redux/filmSlice';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.films);
  
  useEffect(() => {
    dispatch(fetchFilms())
  }, []);

  return (
    <div className="App">
      <button
        onClick={() => dispatch(increment())}
      >+</button>
    </div>
  );
}

export default App;
