import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import AboutPage from "../pages/AboutPage";
import TeamPage from "../pages/TeamPage";
import ContactPage from "../pages/ContactPage";
import SignUpPage from "../pages/SignUpPage";
import ProductListPage from "../pages/ProductListPage";
import LoginPage from "../pages/LoginPage";

const PageContent = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/shopping/:category_id/:gender/:category"
          element={<ProductListPage />}
        />

        <Route
          path="/shopping/:gender/:category"
          element={<ProductListPage />}
        />

        <Route path="/product-list-page" element={<ProductListPage />} />

        <Route
          path="/product-page/:category/:productId/:productNameSlug"
          element={<ProductPage />}
        />

        <Route path="/product-page" element={<ProductPage />} />

        <Route path="/about-page" element={<AboutPage />} />

        <Route path="/team-page" element={<TeamPage />} />

        <Route path="/contact-page" element={<ContactPage />} />

        <Route path="/signup-page" element={<SignUpPage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="*" element={<h1>404 Not Found Page</h1>} />
      </Routes>
    </div>
  );
};

export default PageContent;
