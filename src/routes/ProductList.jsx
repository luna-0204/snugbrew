import React from "react";
import ProductCard from "../components/ProductCard";

export default function ProductList({ products, add }) {
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
