import React, { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./routes/Home";
import ProductList from "./routes/ProductList";
import Cart from "./routes/Cart";
import Blog from "./routes/Blog";
import AdminPanel from "./routes/AdminPanel";

import ProductCard from "./components/ProductCard";

/* PHONE + ADMIN PASS → change these for your site */
const PHONE_NUMBER = "919876543210";
const ADMIN_PASSWORD = "adminpass";

const DEFAULT_PRODUCTS = [
  {
    id: "p_chamomile",
    title: "Chamomile Cozy (Tin - 10 servings)",
    price: 349,
    stock: 120,
    desc: "A soothing floral blend designed for restful nights.",
    img: "/assets/images/chamomile-calm-kit.jpg"
  },
  {
    id: "p_lavender",
    title: "Lavender Vanilla Honey (Tin - 10 servings)",
    price: 399,
    stock: 100,
    desc: "Creamy, soft, naturally sweet — your bedtime companion.",
    img: "/assets/images/vanilla-honey-calm-kit.jpg"
  }
];

// small helper
function uid(prefix = "id") {
  return prefix + "_" + Math.random().toString(36).slice(2, 9);
}

// save to localStorage
function useLocalState(key, initial) {
  const [state, setState] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initial;
    } catch (e) {
      return initial;
    }
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}

export default function App() {
  const [products, setProducts] = useLocalState("snug_products", DEFAULT_PRODUCTS);
  const [orders, setOrders] = useLocalState("snug_orders", []);
  const [posts, setPosts] = useLocalState("snug_posts", []);
  const [cart, setCart] = useLocalState("snug_cart", []);
  const [admin, setAdmin] = useLocalState("snug_admin", { logged: false });

  const revenue = useMemo(() => orders.reduce((s, o) => s + o.total, 0), [orders]);

  // Keep your functions (only small edits to ensure they are accessible across routes)
  function addToCart(id) {
    const p = products.find((x) => x.id === id);
    if (!p) return;
    setCart((c) => [...c, { id: uid("cart"), productId: p.id, title: p.title, price: p.price }]);
    alert("Added to cart");
  }

  function checkout(name, city) {
    if (!name || !city) return alert("Enter name + city");
    if (cart.length === 0) return alert("Cart empty");

    const total = cart.reduce((s, i) => s + i.price, 0);

    setOrders((o) => [{ id: uid("order"), name, city, items: cart, total, date: new Date().toISOString() }, ...o]);
    setCart([]);
    alert("Order placed!");

    const text = encodeURIComponent(`Order placed: ${name}, ${city}, total ₹${total}`);
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${text}`, "_blank");
  }

  function adminLogin(pass) {
    if (pass === ADMIN_PASSWORD) {
      setAdmin({ logged: true });
      return true;
    } else {
      return false;
    }
  }

  // Provide props to routes so the UI components can use state/functions
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-[#FFF9F4] to-[#F6F3FF] text-[#2b2a28]">
        <Nav admin={admin} onNav={() => {}} cartCount={cart.length} />
        <main className="max-w-6xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home products={products} addToCart={addToCart} posts={posts} />} />
            <Route path="/products" element={<ProductList products={products} add={addToCart} />} />
            <Route path="/cart" element={<Cart cart={cart} checkout={checkout} setCart={setCart} />} />
            <Route path="/blog" element={<Blog posts={posts} />} />
            <Route
              path="/admin"
              element={
                <AdminPanel
                  admin={admin}
                  setAdmin={setAdmin}
                  products={products}
                  setProducts={setProducts}
                  posts={posts}
                  setPosts={setPosts}
                  orders={orders}
                  revenue={revenue}
                  adminLogin={adminLogin}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
