import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import About from "./pages/About.jsx";
import Premium from "./pages/Premium.jsx";
import Starter from "./pages/Starter.jsx";
import Tins from "./pages/Tins.jsx";
import Contact from "./pages/Contact.jsx";
import Testimonials from "./pages/Testimonials.jsx";

// FLOATING BLOB GRADIENT BACKGROUND
const bgStyles = `
  body {
    background: radial-gradient(circle at 20% 30%, #f3e7ff, transparent 70%),
                radial-gradient(circle at 80% 70%, #ffe9d6, transparent 60%),
                radial-gradient(circle at 30% 80%, #e7ffe0, transparent 60%);
  }
`;
export default function App() {
  return (
    <div>
      <style>{bgStyles}</style>

      {/* NAVBAR */}
      <nav className="flex justify-between px-6 py-4 bg-white/70 backdrop-blur-md shadow-md sticky top-0 z-50 rounded-b-xl">
        <Link to="/">
          <h1 className="text-2xl font-serif text-[#6d5a72]">SnugBrew</h1>
        </Link>

        <div className="flex gap-6 text-[#6d5a72] font-medium">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/premium">Premium Kits</Link>
          <Link to="/starter">Starter Kits</Link>
          <Link to="/tins">Tins</Link>
          <Link to="/about">About</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/starter" element={<Starter />} />
        <Route path="/tins" element={<Tins />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* FOOTER */}
      <footer className="text-center text-sm py-6 opacity-60 mt-16">
        <p>SnugBrew — Academic Demo</p>
        <p>+91 XXXXXXXXXX</p>
        <p>snugbrew-demo@example.com</p>
      </footer>
    </div>
  );
}
