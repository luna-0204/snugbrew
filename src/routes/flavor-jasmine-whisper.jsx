import React from "react";

export default function FlavorJasmineWhisper() {
  return (
    <main className="container" style={{ marginTop: 22 }}>
      <section className="card">
        <h2>Jasmine Whisper — Light Floral Calm</h2>
        <p className="small">A delicate jasmine blend to quiet the mind and soften the senses.</p>

        <div style={{ marginTop: 20, display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
          <div className="card">
            <h4>Tin</h4>
            <img src="/assets/images/jasmine-wisper-tin.jpg" alt="Jasmine tin" style={{ width: "100%", borderRadius: 12 }} />
            <div className="price" style={{ marginTop: 8 }}>₹499</div>
          </div>

          <div className="card">
            <h4>Starter Calm Kit</h4>
            <img src="/assets/images/jasmine-wisper-calm-kit.jpg" alt="Jasmine starter kit" style={{ width: "100%", borderRadius: 12 }} />
            <div className="price" style={{ marginTop: 8 }}>₹499</div>
          </div>

          <div className="card">
            <h4>Premium Calm Kit</h4>
            <img src="/assets/images/jasmine-wisper-premium-kit.jpg" alt="Jasmine premium kit" style={{ width: "100%", borderRadius: 12 }} />
            <div className="price" style={{ marginTop: 8 }}>
              ₹899 <span className="small" style={{ marginLeft: 8, textDecoration: "line-through" }}>₹1299</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
