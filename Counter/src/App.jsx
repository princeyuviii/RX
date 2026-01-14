import React,{useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home.jsx";
import NavBar from "./Components/NavBar.jsx";

export default function App() {
  let [data, setData] = useState([])
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

