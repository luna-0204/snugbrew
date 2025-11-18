import React from "react";
import DreamyCard from "../ui/DreamyCard.jsx";

export default function Premium() {
  return (
    <div className="px-6 py-10">
      <h2 className="text-3xl font-semibold text-center mb-10 text-[#6d5a72]">
        Premium Ritual Kits
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        <DreamyCard title="Chamomile Premium"
          img="/assets/images/chamomile-premium-kit.jpg"
          desc="Candle + skincare + eye mask." />

        <DreamyCard title="Cocoa Dream Premium"
          img="/assets/images/cocoa-dream-premium-kit.jpg"
          desc="Cocoa tin + plushie + mask." />

        <DreamyCard title="Jasmine Whisper Premium"
          img="/assets/images/jasmine-wisper-premium-kit.jpg"
          desc="Jasmine tin + candle + mask." />

      </div>
    </div>
  );
}
