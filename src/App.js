import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './scss/app.scss';
// components
import Header from "./components/header/header";
import Home from "./pages/Home";

function App() {
  return (<>
    {/* <GlobalStyled /> */}
    <BrowserRouter>
      <Header />

      <Routes>
        <Route 
          path="/"
          element={<Home />}
        />
      </Routes>

    </BrowserRouter>
  </>);
}

export default App;
