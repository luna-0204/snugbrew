import React, { useState } from "react";

function uid(prefix = "id") {
  return prefix + "_" + Math.random().toString(36).slice(2, 9);
}

export default function ManageProducts({ products, setProducts }) {
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
