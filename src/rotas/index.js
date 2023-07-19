import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Emconstrucao from "../paginas/EmConstrucao";
import Navbar from "../componentes/Navbar"





const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<Emconstrucao />} />
          <Route path="*" element={<Emconstrucao />} />
          <Route path="/Emconstrucao" element={<Emconstrucao />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;