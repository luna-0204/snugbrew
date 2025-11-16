import React from "react";
import ProductCard from "../components/ProductCard";

export default function Home({ products = [], addToCart = () => {}, posts = [] }) {
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
