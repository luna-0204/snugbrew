import React, { useEffect, useMemo, useState } from "react";

import Nav from "./components/Nav";
import Home from "./routes/Home";
import ProductList from "./routes/ProductList";
import Cart from "./routes/Cart";
import Blog from "./routes/Blog";
import AdminPanel from "./routes/AdminPanel";

import About from "./routes/About";
import Pricing from "./routes/Pricing";
import Contact from "./routes/Contact";
import Testimonials from "./routes/Testimonials";

import FlavorLavender from "./routes/flavor-lavender";
import FlavorVanillaHoney from "./routes/flavor-vanilla-honey";
import FlavorChamomile from "./routes/flavor-chamomile-cozy";
import FlavorCocoa from "./routes/flavor-cocoa-dream";
import FlavorJasmine from "./routes/flavor-jasmine-whisper";

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

  const [view, setView] = useLocalState("snug_view", "home"); // persist last view if you like

  const revenue = useMemo(() => orders.reduce((s, o) => s + o.total, 0), [orders]);

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
    }
    return false;
  }

  // Helper to open single-flavour pages, call setView('flavor-lavender') etc.
  const openFlavor = (flav) => setView(flav);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF9F4] to-[#F6F3FF] text-[#2b2a28]">
      <Nav admin={admin} cartCount={cart.length} onNav={setView} />

      <main className="max-w-6xl mx-auto px-4 py-8">
        {view === "home" && <Home products={products} addToCart={addToCart} posts={posts} />}

        {view === "products" && <ProductList products={products} add={addToCart} />}

        {view === "cart" && <Cart cart={cart} checkout={checkout} setCart={setCart} />}

        {view === "blog" && <Blog posts={posts} />}

        {view === "about" && <About />}

        {view === "pricing" && <Pricing />}

        {view === "contact" && <Contact />}

        {view === "testimonials" && <Testimonials />}

        {view === "admin" && (
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
        )}

        {/* flavour single pages */}
        {view === "flavor-lavender" && <FlavorLavender openFlavor={openFlavor} />}
        {view === "flavor-vanilla-honey" && <FlavorVanillaHoney openFlavor={openFlavor} />}
        {view === "flavor-chamomile-cozy" && <FlavorChamomile openFlavor={openFlavor} />}
        {view === "flavor-cocoa-dream" && <FlavorCocoa openFlavor={openFlavor} />}
        {view === "flavor-jasmine-whisper" && <FlavorJasmine openFlavor={openFlavor} />}
      </main>
    </div>
  );
}
        </main>
    </div>
  );
}
