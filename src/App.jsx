import React from "react";
import "./index.css";
import "./styles.css";

export default function App() {
  return (
    <div className="min-h-screen px-5 py-10">

      {/* HEADER */}
      <header className="text-center mb-12">
        <img
          src="/assets/images/snugbrew-logo.jpg"
          alt="SnugBrew Logo"
          className="mx-auto w-32 mb-4 drop-shadow-lg"
        />
        <h1 className="text-4xl font-serif text-[#6d5a72]">SnugBrew</h1>
        <p className="text-[#7a7a7a] mt-2">
          Calm Ritual Kits • Non-caffeinated • Dreamy Wellness
        </p>
      </header>

      {/* DREAMY FEATURE GRID */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-[#6d5a72] text-center">
          Our Dreamy Ritual Kits
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Chamomile Cozy */}
          <DreamyCard
            title="Chamomile Cozy"
            img="/assets/images/chamomile-calm-kit.jpg"
            desc="Soft chamomile notes for deep rest."
          />

          {/* Cocoa Dream */}
          <DreamyCard
            title="Cocoa Dream"
            img="/assets/images/cocoa-dream-calm-kit.jpg"
            desc="Warm cocoa with a cozy, nighttime vibe."
          />

          {/* Jasmine Whisper */}
          <DreamyCard
            title="Jasmine Whisper"
            img="/assets/images/jasmine-wisper-calm-kit.jpg"
            desc="Light floral aroma for peaceful evenings."
          />

          {/* Lavender Calm */}
          <DreamyCard
            title="Lavender Calm"
            img="/assets/images/lavender-calm-kit.jpg"
            desc="Classic lavender blend for gentle sleep."
          />

          {/* Vanilla Honey */}
          <DreamyCard
            title="Vanilla Honey"
            img="/assets/images/vanila-honey-calm-kit.jpg"
            desc="Warm vanilla + honey comfort blend."
          />

          {/* All-Flavour Box */}
          <DreamyCard
            title="All Flavours Pack"
            img="/assets/images/all-flavour.jpg"
            desc="Taste the full SnugBrew ritual set."
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center small mt-14 mb-4 opacity-70">
        <p>SnugBrew — Academic Project Only</p>
        <p>Contact: +91 XXXXXXXXXX</p>
        <p>Email: snugbrew-demo@example.com</p>
      </footer>
    </div>
  );
}

/* Dreamy Card Component */
function DreamyCard({ title, img, desc }) {
  return (
    <div className="rounded-3xl bg-white shadow-xl p-4 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-[#f0e8ff]">

      <div className="overflow-hidden rounded-2xl">
        <img
          src={img}
          alt={title}
          className="w-full h-60 object-cover rounded-2xl hover:scale-105 transition-all duration-500"
        />
      </div>

      <h3 className="text-xl font-semibold mt-4 text-[#6d5a72]">{title}</h3>
      <p className="text-[#7a7a7a] text-sm mt-1">{desc}</p>

      <button className="btn-primary mt-4 w-full text-sm py-2 rounded-xl">
        View Details
      </button>
    </div>
  );
}
