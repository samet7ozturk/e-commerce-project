import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import AboutPage from "../pages/AboutPage";
import TeamPage from "../pages/TeamPage";
import ContactPage from "../pages/ContactPage";
import SignUpPage from "../pages/SignUpPage";
import ProductListPage from "../pages/ProductListPage";

const PageContent = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/product-list-page" element={<ProductListPage />} />

        <Route path="/product-page" element={<ProductPage />} />

        <Route path="/about-page" element={<AboutPage />} />

        <Route path="/team-page" element={<TeamPage />} />

        <Route path="/contact-page" element={<ContactPage />} />

        <Route path="/signup-page" element={<SignUpPage />} />

        <Route path="*" element={<h1>404 Not Found Page</h1>} />
      </Routes>
    </div>
  );
};

export default PageContent;
