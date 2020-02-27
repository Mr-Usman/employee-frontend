import React, { Component } from "react";
import Routes from "./Routes";
import NavBar from "./components/Navbar";

const App = () => {
  const role = JSON.parse(localStorage.getItem("user"))
    ? JSON.parse(localStorage.getItem("user")).role
    : false;
  return (
    <React.Fragment>
      <NavBar role={role} />
      <Routes />
    </React.Fragment>
  );
};

export default App;
