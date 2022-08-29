import React from 'react';

import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import { Home } from "./Home";
import { Employees } from "./Employees";
import { Services } from "./Services";
import { NavBar } from '../../components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';


export const Principal: React.FC = () => {
  return (

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/employees' element={<Employees />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </BrowserRouter>


  );
}