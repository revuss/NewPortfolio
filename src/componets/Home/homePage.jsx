import React from "react";
import NavBar from "./navBar";
import Cover from "./cover";

const HomePage = () => {
  return (
    <div className="h-screen  justify-center items-center">
      <NavBar className="h-1/6" />
      <Cover className="h-3/4" />
    </div>
  );
};

export default HomePage;
