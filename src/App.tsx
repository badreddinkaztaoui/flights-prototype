import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
// Components
import Home from "./pages/home";
import Navbar from "./components/navbar";
import FlightsList from "./pages/flights";
import FlightDetails from "./pages/flight";

const App = () => {
   return (
      <Fragment>
         <Navbar />
         <div className="container">
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="list" element={<FlightsList />} />
               <Route path="list/:id" element={<FlightDetails />} />
            </Routes>
         </div>
      </Fragment>
   );
};

export default App;
