export default function DreamyCard({ title, img, desc }) {
  return (
    <div className="rounded-3xl bg-white/80 backdrop-blur-xl shadow-xl p-4 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-[#efdfff]">

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
