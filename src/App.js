import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFilms } from './Redux/filmSlice';
import { INITIAL_SEARCH_TERM } from './constants';
import Header from './Components/Header/Header';
import TableDashboard from './Components/Table/TableDashboard';
import './App.css';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilms(`s=${INITIAL_SEARCH_TERM}`))
  }, [dispatch]);

  return (
    <div className="App">
      <Header></Header>
      <TableDashboard></TableDashboard>
    </div>
  );
}

export default App;
