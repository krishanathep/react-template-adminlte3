import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WithNavbar from './layouts/WithNavbar';
import WithOutNavbar from './layouts/WithOutNavbar';
import Signin from './pages/auth/Signin';
import Signup from './pages/auth/Signup';
import Home from './pages/Home'
import About from './pages/About'
import Leave from './pages/leave'
import CreateLeave from './pages/leave/create'
import ViewLeave from './pages/leave/view'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<WithOutNavbar/>}>
          <Route path='/signin' element={<Signin/>} />
          <Route path='/signup' element={<Signup/>} />
        </Route>
        <Route element={<WithNavbar/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/leave' element={<Leave/>}/>
          <Route path='/leave/create' element={<CreateLeave/>}/>
          <Route path='/leave/view' element={<ViewLeave/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
