import React, { useState } from "react";
import ManageProducts from "./ManageProducts";
import ManagePosts from "./ManagePosts";

export default function AdminPanel({ admin, setAdmin, products, setProducts, posts, setPosts, orders, revenue, adminLogin }) {
  const [pass, setPass] = useState("");
  const [tab, setTab] = useState("overview");

  if (!admin.logged)
    return (
      <div className="max-w-sm mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold">Admin Login</h2>
        <input className="w-full p-2 border rounded mt-4" type="password" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} />
        <button
          onClick={() => {
            const ok = adminLogin(pass);
            if (ok) {
              setAdmin({ logged: true });
            } else {
              alert("Wrong password");
            }
          }}
          className="mt-4 bg-[#D7C6FF] w-full py-2 rounded"
        >
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
