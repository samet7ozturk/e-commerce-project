import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";

const PageContent = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="*" element={<h1>404 Not Found Page</h1>} />
      </Routes>
    </div>
  );
};

export default PageContent;
