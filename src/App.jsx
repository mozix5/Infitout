import React from "react";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div className=" bg-[#FBFDFF] overflow-x-hidden">
      <NavBar />
      <Home />
    </div>
  );
};

export default App;
