import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFilms } from './Redux/filmSlice';

import './App.css';
import Header from './Components/Header/Header';

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.films);

  useEffect(() => {
    dispatch(fetchFilms())
  }, [dispatch]);

  return (
    <div className="App">
      <Header></Header>
      
    </div>
  );
}

export default App;
