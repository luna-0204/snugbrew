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
  // LAVENDER
  {
    id: "lavender_starter",
    title: "Lavender • Starter Calm Kit",
    price: 499,
    desc: "Tin • 2 sachets • eye mask • guide",
    img: "/assets/images/lavender-calm-kit.jpg",
    flavor: "lavender",
    type: "starter"
  },
  {
    id: "lavender_premium",
    title: "Lavender • Premium Calm Kit (Launch)",
    price: 899,
    futurePrice: 1299,
    desc: "Large tin • aromatherapy oil • sleep spray",
    img: "/assets/images/lavender-premium-kit.jpg",
    flavor: "lavender",
    type: "premium"
  },
  {
    id: "lavender_tin",
    title: "Lavender • Ritual Tin",
    price: 199,
    desc: "Compact ritual tin — refillable & reusable",
    img: "/assets/images/lavender-tin.jpg",
    flavor: "lavender",
    type: "tin"
  },

  // VANILA HONEY (preserve your spelling)
  {
    id: "vanila_starter",
    title: "Vanila Honey • Starter Calm Kit",
    price: 499,
    desc: "Tin • 2 sachets • eye mask • guide",
    img: "/assets/images/vanila-honey-calm-kit.jpg",
    flavor: "vanila-honey",
    type: "starter"
  },
  {
    id: "vanila_premium",
    title: "Vanila Honey • Premium Calm Kit (Launch)",
    price: 899,
    futurePrice: 1299,
    desc: "Large tin • aromatherapy oil • sleep spray",
    img: "/assets/images/vanila-honey-premium-kit.jpg",
    flavor: "vanila-honey",
    type: "premium"
  },
  {
    id: "vanila_tin",
    title: "Vanila Honey • Ritual Tin",
    price: 199,
    desc: "Compact ritual tin — refillable & reusable",
    img: "/assets/images/vanila-honey-tin.jpg",
    flavor: "vanila-honey",
    type: "tin"
  },

  // CHAMOMILE
  {
    id: "chamomile_starter",
    title: "Chamomile Cozy • Starter Calm Kit",
    price: 499,
    desc: "Tin • 2 sachets • eye mask • guide",
    img: "/assets/images/chamomile-calm-kit.jpg",
    flavor: "chamomile",
    type: "starter"
  },
  {
    id: "chamomile_premium",
    title: "Chamomile Cozy • Premium Calm Kit (Launch)",
    price: 899,
    futurePrice: 1299,
    desc: "Large tin • aromatherapy oil • sleep spray",
    img: "/assets/images/chamomile-premium-kit.jpg",
    flavor: "chamomile",
    type: "premium"
  },
  {
    id: "chamomile_tin",
    title: "Chamomile Cozy • Ritual Tin",
    price: 199,
    desc: "Compact ritual tin — refillable & reusable",
    img: "/assets/images/chamomile-tin.jpg",
    flavor: "chamomile",
    type: "tin"
  },

  // COCOA DREAM
  {
    id: "cocoa_starter",
    title: "Cocoa Dream • Starter Calm Kit",
    price: 499,
    desc: "Tin • 2 sachets • eye mask • guide",
    img: "/assets/images/cocoa-dream-calm-kit.jpg",
    flavor: "cocoa-dream",
    type: "starter"
  },
  {
    id: "cocoa_premium",
    title: "Cocoa Dream • Premium Calm Kit (Launch)",
    price: 899,
    futurePrice: 1299,
    desc: "Large tin • aromatherapy oil • sleep spray",
    img: "/assets/images/cocoa-dream-premium-kit.jpg",
    flavor: "cocoa-dream",
    type: "premium"
  },
  {
    id: "cocoa_tin",
    title: "Cocoa Dream • Ritual Tin",
    price: 199,
    desc: "Compact ritual tin — refillable & reusable",
    img: "/assets/images/cocoa-dream-tin.jpg",
    flavor: "cocoa-dream",
    type: "tin"
  },

  // JASMINE WISPER (note: 'wisper' preserved)
  {
    id: "jasmine_starter",
    title: "Jasmine Wisper • Starter Calm Kit",
    price: 499,
    desc: "Tin • 2 sachets • eye mask • guide",
    img: "/assets/images/jasmine-wisper-calm-kit.jpg",
    flavor: "jasmine-wisper",
    type: "starter"
  },
  {
    id: "jasmine_premium",
    title: "Jasmine Wisper • Premium Calm Kit (Launch)",
    price: 899,
    futurePrice: 1299,
    desc: "Large tin • aromatherapy oil • sleep spray",
    img: "/assets/images/jasmine-wisper-premium-kit.jpg",
    flavor: "jasmine-wisper",
    type: "premium"
  },
  {
    id: "jasmine_tin",
    title: "Jasmine Wisper • Ritual Tin",
    price: 199,
    desc: "Compact ritual tin — refillable & reusable",
    img: "/assets/images/jasmine-wisper-tin.jpg",
    flavor: "jasmine-wisper",
    type: "tin"
  },

  // subscription as a "product" (optional listing)
  {
    id: "sub_monthly_999",
    title: "Subscription • Monthly Calm",
    price: 999,
    desc: "Monthly subscription — new seasonal sachets + perks (recurring).",
    img: "/assets/images/all-flavour.jpg",
    flavor: "subscription",
    type: "subscription"
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

  // Helper to open single-flavour pages
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
