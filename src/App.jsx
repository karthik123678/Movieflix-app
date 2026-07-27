import React, { useEffect, useRef } from 'react'
import './css/App.css'
import Home from './Pages.jsx/Home';
import { Routes, Route } from 'react-router-dom';
import { MovieProvider } from './Contexts/MovieContext';
import Favorites from './Pages.jsx/Favorites';
import Navbar from './Components/Navbar';


const App = () => {
  return (
    <div>
      
      <MovieProvider>
        <div>
          <Navbar />
          <main className='main-content'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/favorites' element={<Favorites />} />
            </Routes>
          </main>
        </div>
      </MovieProvider>
    </div>
  );
}

export default App