import React from "react";

export default function FlavorVanillaHoney() {
  return (
    <main className="container" style={{ marginTop: 22 }}>
      <section className="card">
        <h2>Vanilla Honey — Cozy Sweet Calm</h2>
        <p className="small">Creamy, soft, and naturally sweet — a warm hug in a tin.</p>

        <div style={{ marginTop: 20, display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
          <div className="card">
            <h4>Tin</h4>
            <img src="/assets/images/vanila-honey-tin.jpg" alt="Vanilla honey tin" style={{ width: "100%", borderRadius: 12 }} />
            <div className="price" style={{ marginTop: 8 }}>₹499</div>
          </div>

          <div className="card">
            <h4>Starter Calm Kit</h4>
            <img src="/assets/images/vanila-honey-calm-kit.jpg" alt="Vanilla honey starter kit" style={{ width: "100%", borderRadius: 12 }} />
            <div className="price" style={{ marginTop: 8 }}>₹499</div>
          </div>

          <div className="card">
            <h4>Premium Calm Kit</h4>
            <img src="/assets/images/vanila-honey-premium-kit.jpg" alt="Vanilla honey premium kit" style={{ width: "100%", borderRadius: 12 }} />
            <div className="price" style={{ marginTop: 8 }}>
              ₹899 <span className="small" style={{ marginLeft: 8, textDecoration: "line-through" }}>₹1299</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
