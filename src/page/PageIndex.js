import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "./Home";
import AboutUS from "./AboutUS";
import Blog from "./Blog";
import Contact from "./Contact";
import Testimonials from "./Testimonials";

export default function PageIndex() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUS />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Route>
    </Routes>
  );
}
