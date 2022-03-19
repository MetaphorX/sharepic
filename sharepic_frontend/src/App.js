import React from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';
import Login from './components/Login';
import Home from './container/Home';
import { Search } from './components';


const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Login/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="search" element={<Search/>}/>

    </Routes>
  )
}

export default App