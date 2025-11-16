import React, { useState } from "react";

function uid(prefix = "id") {
  return prefix + "_" + Math.random().toString(36).slice(2, 9);
}

export default function ManagePosts({ posts, setPosts }) {
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
