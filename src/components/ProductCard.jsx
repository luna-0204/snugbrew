import React from "react";

export default function ProductCard({ p, add }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      <div className="h-40 w-full mb-3 overflow-hidden rounded-md">
        <img
          src={p.img}
          alt={p.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            // fallback if any image path breaks
            e.target.onerror = null;
            e.target.src = "/assets/images/snugbrew-logo.jpg";
          }}
        />
      </div>

      <h3 className="mt-2 font-semibold text-lg">{p.title}</h3>
      <p className="text-xs mt-1 text-neutral-600">{p.desc}</p>

      <div className="mt-auto flex items-center justify-between pt-4">
        <div>
          <div className="font-bold text-base">₹{p.price}</div>
          {p.futurePrice && (
            <div className="text-xs text-neutral-500 line-through">₹{p.futurePrice}</div>
          )}
        </div>

        <button
          onClick={add}
          className="ml-4 px-3 py-2 rounded bg-gradient-to-r from-[#A7C59D] to-[#7DA071] text-white text-sm font-semibold"
        >
          Add
        </button>
      </div>
    </div>
  );
}
