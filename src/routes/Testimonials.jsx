import React from "react";

export default function Testimonials() {
  return (
    <main className="container" style={{ marginTop: 18 }}>
      <section className="card">
        <h2>Customers</h2>
        <div className="testimonials-grid">
          <div className="card"><strong>— Aishwarya, Chennai</strong><p className="small">"Lavender is my bedtime bestie."</p></div>
          <div className="card"><strong>— Sidh, Pune</strong><p className="small">"Perfect ritual between classes."</p></div>
        </div>
      </section>
    </main>
  );
}
