import React from "react";
import DreamyCard from "../ui/DreamyCard.jsx";

export default function Products() {
  return (
    <div className="px-6 py-10">
      <h2 className="text-3xl font-semibold text-center mb-10 text-[#6d5a72]">
        SnugBrew Complete Collection
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        <DreamyCard title="Chamomile Cozy"
          img="/assets/images/chamomile-premium-kit.jpg"
          desc="Premium Calm Ritual Set." />

        <DreamyCard title="Cocoa Dream"
          img="/assets/images/cocoa-dream-premium-kit.jpg"
          desc="Premium chocolate ritual." />

        <DreamyCard title="Jasmine Whisper"
          img="/assets/images/jasmine-wisper-premium-kit.jpg"
          desc="Premium floral ritual." />

        <DreamyCard title="Lavender Calm"
          img="/assets/images/lavender-premium-kit.jpg"
          desc="Premium lavender ritual." />

        <DreamyCard title="Vanilla Honey"
          img="/assets/images/vanila-honey-premium-kit.jpg"
          desc="Premium vanilla ritual." />

      </div>
    </div>
  );
}
