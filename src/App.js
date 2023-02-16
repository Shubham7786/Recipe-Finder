import React from 'react';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Header from './Header';
import Home from './Home'

function App() {
  return (
    <div className='appmainDiv'>
       <BrowserRouter basename={process.env.PUBLIC_URL}>
       {/* <div className="container"> */}
       <Routes>
       <Route exact path="/" element={<Home />} />
       <Route  path="/home" element={<Home />} />
         <Route path="/findRecipe" element={<Header />}/>
       </Routes>
        {/* </div> */}
       </BrowserRouter>
    </div>
  );
}

export default App;
