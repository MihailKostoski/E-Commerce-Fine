import React from "react";
import { lazy, Suspense } from "react";
import Sidebar from "../Sidebar/Sidebar";

const MainGrid = lazy(() => import("./MainGrid/MainGrid"));
function Main() {
  return (
    <div className="flex flex-row ">
      <Sidebar />
      <Suspense fallback={<div>Loading...</div>}>
        <MainGrid />
      </Suspense>
    </div>
  );
}

export default Main;
