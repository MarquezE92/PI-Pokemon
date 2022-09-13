import './App.css';
//import React from 'react'?
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import HomePage from './components/HomePage/HomePage';
import CreatePokemon from './components/CreatePokemon/CreatePokemon';
import PokemonDetail from './components/PokemonDetail/PokemonDetail';
import Success from './components/Success/Success';

function App() {
  return (
    <>
      <Routes>
      <Route exact path='/' element={<LandingPage/>} />
      <Route exact path='/home' element={<HomePage/>} />
      <Route exact path='/home/:pokemonId' element={<PokemonDetail/>} />
      <Route exact path='/create' element={<CreatePokemon/>} />
      <Route exact path='/success' element={<Success/>} />
      </Routes>
    </>
  );
}

export default App;

