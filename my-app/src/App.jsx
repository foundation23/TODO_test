import React from 'react';
import './app.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Header/>
                <Navbar/>
                <AppRouter />
            </BrowserRouter>
        </div>
    );
}

export default App;
