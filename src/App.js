import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchFilms } from './Redux/filmSlice';
import { INITIAL_SEARCH_TERM } from './constants';
import Header from './Components/Header/Header';
import TableDashboard from './Components/Table/TableDashboard';
import FilmDetail from './Components/FilmDetail/FilmDetail';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilms(`s=${INITIAL_SEARCH_TERM}`))
  }, [dispatch]);

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path='/dashboard' element={<TableDashboard />}></Route>
        <Route path={`/filmdetail/:i`} element={<FilmDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
