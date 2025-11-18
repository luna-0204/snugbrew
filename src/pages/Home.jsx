import React from "react";
import Carousel from "../ui/Carousel.jsx";
import DreamyCard from "../ui/DreamyCard.jsx";

export default function Home() {
  return (
    <div className="px-6 py-10">
      <Carousel />

      <h2 className="text-3xl font-semibold mt-14 mb-6 text-[#6d5a72] text-center">
        Explore SnugBrew Flavours
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        <DreamyCard title="Chamomile Cozy"
          img="/assets/images/chamomile-calm-kit.jpg"
          desc="Deep-rest chamomile blend." />

        <DreamyCard title="Cocoa Dream"
          img="/assets/images/cocoa-dream-calm-kit.jpg"
          desc="Night warmth & chocolate haze." />

        <DreamyCard title="Jasmine Whisper"
          img="/assets/images/jasmine-wisper-calm-kit.jpg"
          desc="Soft floral calming notes." />

        <DreamyCard title="Lavender Calm"
          img="/assets/images/lavender-calm-kit.jpg"
          desc="Classic lavender night soothe." />

        <DreamyCard title="Vanilla Honey"
          img="/assets/images/vanila-honey-calm-kit.jpg"
          desc="Golden comfort & sweetness." />

        <DreamyCard title="All Flavours Pack"
          img="/assets/images/all-flavour.jpg"
          desc="Try the entire SnugBrew Ritual." />
      </div>
    </div>
  );
}
