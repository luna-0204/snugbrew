import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Nav({ admin, cartCount }) {
  const navigate = useNavigate();
  return (
    <nav className="bg-white/60 backdrop-blur-md sticky top-0 z-50 border-b py-3">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-[#6B4FBA] cursor-pointer" onClick={() => navigate("/")}>
          SnugBrew
        </div>
        <div className="flex gap-4 text-sm">
          <Link to="/products">Products</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/cart">Cart ({cartCount})</Link>
          {!admin.logged && <Link to="/admin">Admin</Link>}
          {admin.logged && <Link to="/admin">Dashboard</Link>}
        </div>
      </div>
    </nav>
  );
}
