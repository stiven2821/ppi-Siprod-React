import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import Noticias from "../pages/Noticias";
import Conocenos from "../pages/Conocenos"
import Error from "../pages/Error"

const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Noticias" element={<Noticias/>}/>
        <Route path="/Conocenos" element={<Conocenos/>}/>
        <Route path="*" element={<Error/>}/>

    </Routes>
  )
}

export default Routers