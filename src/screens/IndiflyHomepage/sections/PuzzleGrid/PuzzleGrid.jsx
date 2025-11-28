import React from "react";
import "./PuzzleGrid.css";

export const PuzzleGrid = () => {
  return (
    <section className="w-full max-w-6xl mx-auto p-8 md:p-4">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Top Left */}
        <div className="bg-[#8254F8] text-white p-6 rounded-3xl puzzle puzzle-left-top relative">
          <h2 className="font-extrabold text-xl">inSTACK</h2>
          <p className="font-semibold mb-2 text-sm opacity-90">Product & Technology</p>
          <p className="text-sm opacity-80">
            Build, scale, and secure your tech with agile product engineering, cloud, & compliance support tailored for startups.
          </p>
        </div>

        {/* Top Right */}
        <div className="bg-[#E59E23] text-white p-6 rounded-3xl puzzle puzzle-right-top relative">
          <h2 className="font-extrabold text-xl">inSURGE</h2>
          <p className="font-semibold mb-2 text-sm opacity-90">Marketing & Growth</p>
          <p className="text-sm opacity-80">
            From brand positioning to performance campaigns, fuel your visibility and demand to drive sustainable growth.
          </p>
        </div>

        {/* Bottom Left */}
        <div className="bg-[#1FB255] text-white p-6 rounded-3xl puzzle puzzle-left-bottom relative">
          <h2 className="font-extrabold text-xl">inSURE</h2>
          <p className="font-semibold mb-2 text-sm opacity-90">Legal & Compliance</p>
          <p className="text-sm opacity-80">
            Simplify the complex. Robust legal frameworks & compliance services to safeguard your venture at every stage.
          </p>
        </div>

        {/* Bottom Right */}
        <div className="bg-[#2F56D4] text-white p-6 rounded-3xl puzzle puzzle-right-bottom relative">
          <h2 className="font-extrabold text-xl">inVOLVE</h2>
          <p className="font-semibold mb-2 text-sm opacity-90">People & Culture</p>
          <p className="text-sm opacity-80">
            HR that goes beyond hiring — helping you attract, nurture, and retain talent while shaping resilient company culture.
          </p>
        </div>
      </div>

      {/* Center Circle */}
      <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[6rem] h-[6rem] text-[0.875rem] p-[2rem] bg-white rounded-full shadow-xl border-4 border-[#EBEEF5]
                      flex items-center justify-center font-extrabold text-3xl">
        in<span className="text-[#0D4C9B]">CORE</span>
      </div>
    </section>
  );
}

export default PuzzleGrid;