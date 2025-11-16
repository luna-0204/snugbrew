import React from "react";

export default function ProductCard({ p, add }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      <img src={p.img} className="rounded h-40 w-full object-cover" alt={p.title} />
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
