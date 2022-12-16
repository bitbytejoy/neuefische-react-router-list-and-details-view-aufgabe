import React from 'react';
import './App.css';
import Root from "./Root";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Greeting from "./Greeting";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Root/>}/>
        <Route path={"/hello/:id"} element={<Greeting/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
