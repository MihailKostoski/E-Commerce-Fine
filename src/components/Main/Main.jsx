import React from "react";
import { lazy, Suspense } from "react";
import Sidebar from "../Sidebar/Sidebar";

const MainGrid = lazy(() => import("./MainGrid/MainGrid"));
function Main() {
  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar />
      <Suspense fallback={<div></div>}>
        <MainGrid />
      </Suspense>
    </div>
  );
}

export default Main;
