import React from "react";

export default function Testimonials() {
  return (
    <div className="px-6 py-10 max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold mb-10 text-center text-[#6d5a72]">
        What Our Testers Say
      </h2>

      <div className="bg-white/60 backdrop-blur-md p-6 rounded-3xl shadow-xl mb-6">
        <p className="italic text-[#7a7a7a]">
          “SnugBrew literally healed my sleep schedule.”
        </p>
        <p className="mt-2 font-semibold text-[#6d5a72]">– Aesthetic Girl</p>
      </div>

      <div className="bg-white/60 backdrop-blur-md p-6 rounded-3xl shadow-xl mb-6">
        <p className="italic text-[#7a7a7a]">
          “The Jasmine Whisper kit is my new personality.”
        </p>
        <p className="mt-2 font-semibold text-[#6d5a72]">– Wellness Babe</p>
      </div>

      <div className="bg-white/60 backdrop-blur-md p-6 rounded-3xl shadow-xl">
        <p className="italic text-[#7a7a7a]">
          “I need the Cocoa Dream candle in real life.”
        </p>
        <p className="mt-2 font-semibold text-[#6d5a7a]">– Cozy Queen</p>
      </div>
    </div>
  );
}
