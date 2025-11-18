import React from "react";
import DreamyCard from "../ui/DreamyCard.jsx";

export default function Tins() {
  return (
    <div className="px-6 py-10">
      <h2 className="text-3xl font-semibold text-center mb-10 text-[#6d5a72]">
        SnugBrew Tins Collection
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        <DreamyCard title="Chamomile Tin"
          img="/assets/images/chamomile-tin.jpg"
          desc="Pure chamomile brew." />

        <DreamyCard title="Cocoa Dream Tin"
          img="/assets/images/cocoa-dream-tin.jpg"
          desc="Rich cocoa blend." />

        <DreamyCard title="Jasmine Whisper Tin"
          img="/assets/images/jasmine-wisper-tin.jpg"
          desc="Jasmine floral brew." />

        <DreamyCard title="Lavender Tin"
          img="/assets/images/lavender-tin.jpg"
          desc="Lavender aroma brew." />

        <DreamyCard title="Vanilla Honey Tin"
          img="/assets/images/vanila-honey-tin.jpg"
          desc="Golden honey brew." />

      </div>
    </div>
  );
}
