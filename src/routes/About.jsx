import React from "react";

export default function About() {
  return (
    <main className="container" style={{ marginTop: 22 }}>
      <section className="card">
        <h2>About SnugBrew</h2>
        <p className="small">
          SnugBrew crafts non-caffeinated ritual kits that combine scent, micro-skincare, and calming
          accessories into 5–15 minute reset rituals. Each kit contains a tin, seasonal scent sachets, an
          eye mask, a micro-skincare sachet and a guided ritual card. Ethically sourced and packaged in
          compostable materials. Made with care in Chennai, India.
        </p>
        <div style={{ marginTop: 12 }}>
          <img src="/assets/images/about-1.jpg" alt="SnugBrew behind the scenes" style={{ width: "100%", borderRadius: 12, objectFit: "cover" }} />
        </div>
      </section>
    </main>
  );
}
