import React from 'react';
import logo from './logo.svg';
// import './App.css';
import {Route, Routes} from "react-router-dom";
import Navigation from "./components/Navigation";

import Header from "./components/Header";
import DashBoard from "./components/DashBoard";
import Restaurants from "./components/Data/Restaurants";
import Chefs from "./components/Data/Chefs";
import Dishes from "./components/Data/Dishes";


function App() {
    return (
        <>
            <Navigation/>
            <div style={{marginLeft:"220px"}}>
                <Header/>
                <Routes>
                    <Route path='/dashboard' element={<DashBoard/>}></Route>
                    <Route path='/restaurants' element={<Restaurants/>}></Route>
                    <Route path='/chefs' element={<Chefs/>}></Route>
                    <Route path='/dishes' element={<Dishes/>}></Route>
                </Routes>
            </div>


        </>
    );
}

export default App;
