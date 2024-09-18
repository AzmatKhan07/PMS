import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FormControls from "./pages/FormControls";
import ViewPage from "./pages/ViewPage";
import SideMenu from "./components/common/SideMenu";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`h-[100vh] flex ${darkMode ? "bg-[#0d021f] text-white" : ""}`}
    >
      <SideMenu />
      <div className="w-[100%] md:w-[86%] px-4 md:px-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form-control" element={<FormControls />} />
          <Route path="/view-data" element={<ViewPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
