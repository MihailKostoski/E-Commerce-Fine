import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import MainGrid from "./MainGrid";

function Main() {
  return (
    <div className="flex flex-row ">
      <Sidebar />
      <MainGrid />
    </div>
  );
}

export default Main;
