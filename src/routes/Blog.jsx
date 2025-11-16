import React from "react";
export default function Blog({ posts }) {
  if (!posts || posts.length === 0) return <p>No posts yet.</p>;
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
