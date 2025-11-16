import React from "react";

export default function FlavorChamomileCozy() {
  return (
    <main className="container" style={{ marginTop: 22 }}>
      <section className="card">
        <h2>Chamomile Cozy — Floral Golden Calm</h2>
        <p className="small">A gentle grounding blend ideal for soft evenings and relaxed breaths.</p>

        <div style={{ marginTop: 20, display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
          <div className="card">
            <h4>Tin</h4>
            <img src="/assets/images/chamomile-tin.jpg" alt="Chamomile tin" style={{ width: "100%", borderRadius: 12 }} />
            <div className="price" style={{ marginTop: 8 }}>₹499</div>
          </div>

          <div className="card">
            <h4>Starter Calm Kit</h4>
            <img src="/assets/images/chamomile-calm-kit.jpg" alt="Chamomile starter kit" style={{ width: "100%", borderRadius: 12 }} />
            <div className="price" style={{ marginTop: 8 }}>₹499</div>
          </div>

          <div className="card">
            <h4>Premium Calm Kit</h4>
            <img src="/assets/images/chamomile-premium-kit.jpg" alt="Chamomile premium kit" style={{ width: "100%", borderRadius: 12 }} />
            <div className="price" style={{ marginTop: 8 }}>
              ₹899 <span className="small" style={{ marginLeft: 8, textDecoration: "line-through" }}>₹1299</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
