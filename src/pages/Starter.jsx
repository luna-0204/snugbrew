import React from "react";
import DreamyCard from "../ui/DreamyCard.jsx";

export default function Starter() {
  return (
    <div className="px-6 py-10">
      <h2 className="text-3xl font-semibold text-center mb-10 text-[#6d5a72]">
        Starter Kits
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        <DreamyCard title="Lavender Starter"
          img="/assets/images/lavender-calm-kit.jpg"
          desc="Mini lavender ritual." />

        <DreamyCard title="Cocoa Starter"
          img="/assets/images/cocoa-dream-calm-kit.jpg"
          desc="Mini cocoa ritual." />

        <DreamyCard title="Chamomile Starter"
          img="/assets/images/chamomile-calm-kit.jpg"
          desc="Mini chamomile ritual." />

      </div>
    </div>
  );
}
