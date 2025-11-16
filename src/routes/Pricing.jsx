import React from "react";

export default function Pricing() {
  return (
    <main className="container" style={{ marginTop: 18 }}>
      <section className="card">
        <h2>Pricing</h2>
        <div className="pricing" style={{ marginTop: 12 }}>
          <div className="plan card">
            <span className="tag">Starter</span>
            <h3>Starter Calm Kit</h3>
            <div className="price">₹499</div>
          </div>
          <div className="plan card">
            <span className="tag">Premium</span>
            <h3>Premium Calm Kit</h3>
            <div className="price">₹899 <span className="small" style={{ textDecoration: "line-through", marginLeft: 10 }}>₹1299</span></div>
            <p className="small">Launch price — valid for first 3 months</p>
          </div>
          <div className="plan card">
            <span className="tag">Subscription</span>
            <h3>Monthly Refill</h3>
            <div className="price">₹999 / month</div>
          </div>
        </div>
      </section>
    </main>
  );
}
