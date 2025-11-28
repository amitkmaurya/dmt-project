import React from "react";

const IndSight = ({ title, text, img }) => {
  return (
    <div className="rounded-2xl border border-[#f2d7c7] bg-white shadow-sm p-6 flex flex-col gap-4 hover:shadow-lg transition duration-300">
      {/* Title */}
      <h2 className="text-[20px] font-semibold text-[#1c1c1c] leading-snug">
        {title}
      </h2>

      {/* Description Text */}
      <p className="text-[14px] text-gray-600 leading-relaxed">
        {text}
      </p>

      {/* Image */}
      <img
        src={img}
        alt="Blog"
        className="rounded-xl w-full h-[170px] object-cover"
      />

      {/* Button */}
      <button
        className="w-full border border-gray-300 rounded-full py-3 text-[14px] font-medium flex items-center justify-center gap-2 hover:bg-[#f6f1ed] transition duration-300"
      >
        Read more{" "}
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" d="M5 12h14" />
          <path strokeLinecap="round" d="M13 6l6 6-6 6" />
        </svg>
      </button>
    </div>
  );
};

export default IndSight;
