import React from "react";

export default function Nav({ admin, cartCount, onNav }) {
  return (
    <nav className="bg-white/60 backdrop-blur-md sticky top-0 z-50 border-b py-3">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-[#6B4FBA] cursor-pointer" onClick={() => onNav("home")}>
          SnugBrew
        </div>

        <div className="flex gap-4 text-sm">
          <button onClick={() => onNav("products")}>Products</button>
          <button onClick={() => onNav("blog")}>Blog</button>
          <button onClick={() => onNav("cart")}>Cart ({cartCount})</button>

          {!admin.logged && <button onClick={() => onNav("admin")}>Admin</button>}
          {admin.logged && <button onClick={() => onNav("admin")}>Dashboard</button>}
        </div>
      </div>
    </nav>
  );
}
