import React, { useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom/client";

// PHONE + ADMIN PASS → change these for your site
const PHONE_NUMBER = "919876543210";
const ADMIN_PASSWORD = "adminpass";

const DEFAULT_PRODUCTS = [
  {
    id: "p_chamomile",
    title: "Chamomile Cozy (Tin - 10 servings)",
    price: 349,
    stock: 120,
    desc: "A soothing floral blend designed for restful nights.",
    img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format"
  },
  {
    id: "p_lavender",
    title: "Lavender Vanilla Honey (Tin - 10 servings)",
    price: 399,
    stock: 100,
    desc: "Creamy, soft, naturally sweet — your bedtime companion.",
    img: "https://images.unsplash.com/photo-1505576391880-5c4f8b28f9c2?q=80&w=800&auto=format"
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

function App() {
  const [products, setProducts] = useLocalState("snug_products", DEFAULT_PRODUCTS);
  const [orders, setOrders] = useLocalState("snug_orders", []);
  const [posts, setPosts] = useLocalState("snug_posts", []);
  const [cart, setCart] = useLocalState("snug_cart", []);
  const [admin, setAdmin] = useLocalState("snug_admin", { logged: false });
  const [view, setView] = useState("home");

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
      setView("admin");
    } else alert("Wrong password");
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF9F4] to-[#F6F3FF] text-[#2b2a28]">
      <Nav admin={admin} onNav={setView} cartCount={cart.length} />

      <main className="max-w-6xl mx-auto px-4 py-8">
        {view === "home" && <Home products={products} addToCart={addToCart} posts={posts} />}
        {view === "products" && <ProductList products={products} add={addToCart} />}
        {view === "cart" && <Cart cart={cart} checkout={checkout} setCart={setCart} />}
        {view === "blog" && <Blog posts={posts} />}
        {view === "admin" && <AdminPanel admin={admin} setAdmin={setAdmin} products={products} setProducts={setProducts} posts={posts} setPosts={setPosts} orders={orders} revenue={revenue} />}
      </main>
    </div>
  );
}

/*** NAVIGATION ***/
function Nav({ admin, onNav, cartCount }) {
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

/*** HOME PAGE ***/
function Home({ products, addToCart, posts }) {
  return (
    <>
      <section className="bg-[#EDE7FF] p-6 rounded-xl shadow-md">
        <h1 className="text-4xl font-bold">Sip. Soothe. Glow.</h1>
        <p className="mt-2 text-sm">Your non-caffeinated ritual for calm nights & cozy self-care.</p>
      </section>

      <h2 className="mt-8 text-2xl font-semibold">Featured Drinks</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-4">
        {products.map((p) => (
          <ProductCard key={p.id} p={p} add={() => addToCart(p.id)} />
        ))}
      </div>

      <h2 className="mt-8 text-2xl font-semibold">Latest Blog Posts</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-4">
        {posts.slice(0, 3).map((post) => (
          <article key={post.id} className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-medium">{post.title}</h3>
            <p className="text-sm mt-2">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </>
  );
}

/*** PRODUCT CARD ***/
function ProductCard({ p, add }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      <img src={p.img} className="rounded h-40 w-full object-cover" />
      <h3 className="mt-3 font-semibold">{p.title}</h3>
      <p className="text-xs mt-1 text-neutral-600">{p.desc}</p>
      <div className="mt-auto flex justify-between items-center pt-4">
        <span className="font-bold">₹{p.price}</span>
        <button onClick={add} className="px-3 py-2 rounded bg-[#D7C6FF] text-sm">
          Add
        </button>
      </div>
    </div>
  );
}

/*** PRODUCT LIST PAGE ***/
function ProductList({ products, add }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold">All Products</h2>
      <div className="grid md:grid-cols-3 mt-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} p={p} add={() => add(p.id)} />
        ))}
      </div>
    </div>
  );
}

/*** CART ***/
function Cart({ cart, checkout, setCart }) {
  const total = cart.reduce((s, i) => s + i.price, 0);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  return (
    <div>
      <h2 className="text-2xl font-semibold">Your Cart</h2>

      {cart.map((item) => (
        <div key={item.id} className="bg-white p-3 mt-3 rounded shadow flex justify-between">
          <div>
            <div className="font-medium">{item.title}</div>
            <div className="text-xs">₹{item.price}</div>
          </div>
          <button onClick={() => setCart((c) => c.filter((x) => x.id !== item.id))} className="text-sm text-red-500">
            Remove
          </button>
        </div>
      ))}

      <div className="bg-white p-4 rounded mt-6 shadow max-w-md">
        <h3 className="font-medium">Checkout</h3>
        <input className="w-full p-2 border rounded mt-2" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="w-full p-2 border rounded mt-2" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />

        <p className="mt-3">
          Total: <b>₹{total}</b>
        </p>
        <button onClick={() => checkout(name, city)} className="w-full bg-[#D7C6FF] px-4 py-2 rounded mt-4">
          Place Order
        </button>
      </div>
    </div>
  );
}

/*** BLOG PAGE ***/
function Blog({ posts }) {
  if (posts.length === 0) return <p>No posts yet.</p>;
  return (
    <div>
      <h2 className="text-2xl font-semibold">Blog</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-4">
        {posts.map((p) => (
          <div key={p.id} className="bg-white p-4 rounded shadow">
            <h3 className="font-medium">{p.title}</h3>
            <p className="text-xs text-neutral-600">{p.excerpt}</p>
            <p className="mt-2 text-sm">{p.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/*** ADMIN PANEL ***/
function AdminPanel({ admin, setAdmin, products, setProducts, posts, setPosts, orders, revenue }) {
  const [pass, setPass] = useState("");
  const [tab, setTab] = useState("overview");

  if (!admin.logged)
    return (
      <div className="max-w-sm mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold">Admin Login</h2>
        <input className="w-full p-2 border rounded mt-4" type="password" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} />
        <button onClick={() => adminLogin(pass)} className="mt-4 bg-[#D7C6FF] w-full py-2 rounded">
          Login
        </button>
      </div>
    );

  return (
    <div>
      <h2 className="text-2xl font-semibold">Dashboard</h2>

      <div className="flex gap-2 mt-4">
        <button onClick={() => setTab("overview")} className="px-3 py-2 bg-white border rounded">
          Overview
        </button>
        <button onClick={() => setTab("products")} className="px-3 py-2 bg-white border rounded">
          Products
        </button>
        <button onClick={() => setTab("posts")} className="px-3 py-2 bg-white border rounded">
          Blog
        </button>
        <button onClick={() => setTab("orders")} className="px-3 py-2 bg-white border rounded">
          Orders
        </button>
      </div>

      {tab === "overview" && (
        <div className="bg-white p-4 rounded shadow mt-4">
          <p>Revenue: ₹{revenue}</p>
          <p>Total Orders: {orders.length}</p>
        </div>
      )}

      {tab === "products" && <ManageProducts products={products} setProducts={setProducts} />}

      {tab === "posts" && <ManagePosts posts={posts} setPosts={setPosts} />}

      {tab === "orders" && (
        <div className="mt-4 space-y-2">
          {orders.map((o) => (
            <div key={o.id} className="bg-white p-3 rounded shadow">
              <div className="font-medium">{o.name} — ₹{o.total}</div>
              <div className="text-xs text-neutral-600">{o.city}</div>
              {o.items.map((i) => (
                <p key={i.id} className="text-xs mt-1">
                  • {i.title}
                </p>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ManageProducts({ products, setProducts }) {
  const [form, setForm] = useState({ title: "", price: "", stock: "", desc: "", img: "" });

  return (
    <div className="mt-4">
      <h3 className="font-medium text-lg">Add Product</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
        <input className="p-2 border rounded" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <input className="p-2 border rounded" placeholder="Price" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
        <input className="p-2 border rounded" placeholder="Stock" value={form.stock} onChange={(e) => setForm({ ...form, stock: e.target.value })} />

        <input className="p-2 border rounded" placeholder="Image URL" value={form.img} onChange={(e) => setForm({ ...form, img: e.target.value })} />

        <textarea className="p-2 border rounded md:col-span-3" placeholder="Description" value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })} />

        <button
          className="bg-[#D7C6FF] py-2 px-3 rounded md:col-span-3"
          onClick={() => {
            if (!form.title) return alert("Missing title");
            setProducts([{ id: uid("p"), price: Number(form.price), stock: Number(form.stock), ...form }, ...products]);
            setForm({ title: "", price: "", stock: "", desc: "", img: "" });
          }}
        >
          Add
        </button>
      </div>

      <h3 className="font-medium text-lg mt-6">Existing Products</h3>
      <div className="space-y-2 mt-2">
        {products.map((p) => (
          <div key={p.id} className="bg-white border p-3 rounded flex justify-between">
            <div>
              <p className="font-medium">{p.title}</p>
              <p className="text-xs">₹{p.price}</p>
            </div>
            <button className="text-red-600 text-sm" onClick={() => setProducts(products.filter((x) => x.id !== p.id))}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function ManagePosts({ posts, setPosts }) {
  const [form, setForm] = useState({ title: "", excerpt: "", content: "" });

  return (
    <div className="mt-4">
      <h3 className="font-medium text-lg">Create Blog Post</h3>
      <input className="p-2 border rounded w-full mt-2" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <input className="p-2 border rounded w-full mt-2" placeholder="Excerpt" value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} />
      <textarea className="p-2 border rounded w-full mt-2" placeholder="Content" value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} />

      <button
        className="mt-3 bg-[#D7C6FF] py-2 px-3 rounded"
        onClick={() => {
          if (!form.title) return alert("Missing title");
          setPosts([{ id: uid("post"), ...form, date: new Date().toISOString() }, ...posts]);
          setForm({ title: "", excerpt: "", content: "" });
        }}
      >
        Publish
      </button>

      <h3 className="font-medium text-lg mt-6">Existing Posts</h3>
      <div className="space-y-2 mt-2">
        {posts.map((p) => (
          <div key={p.id} className="bg-white p-3 border rounded flex justify-between">
            <div>
              <p className="font-medium">{p.title}</p>
              <p className="text-xs text-neutral-600">{p.excerpt}</p>
            </div>
            <button className="text-red-600 text-sm" onClick={() => setPosts(posts.filter((x) => x.id !== p.id))}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
