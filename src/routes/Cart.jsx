import React, { useState } from "react";

export default function Cart({ cart, checkout, setCart }) {
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
