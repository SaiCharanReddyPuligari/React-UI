import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

//outlet in router-dom keeps the Home and Footer in-tact and renders the elements in-between dynamically like Home, About, Contact , etc

function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
