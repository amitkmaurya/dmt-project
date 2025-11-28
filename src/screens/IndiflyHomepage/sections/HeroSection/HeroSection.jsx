import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import inCore from "../../../../assets/inCore.svg";
import dotIcon10 from "../../../../assets/dotIcons/dot10.png";
import dotIcon11 from "../../../../assets/dotIcons/dot11.png";
import venturesMan from "../../../../assets/venturesImg.png";

export const HeroSection = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden bg-[#07172c]">
      {/* BG decorative images */}
      <img
        className="absolute z-0 w-[19%] bottom-0 right-0 opacity-80"
        alt="Group right"
        src={dotIcon10}
      />
      <img
        className="absolute z-0 w-[18%] top-[22%] left-0 opacity-80"
        alt="Group left"
        src={dotIcon11}
      />

      <div className="relative z-20 mx-auto max-w-[1200px] px-4">
        <div className="relative flex flex-wrap gap-4">
          {/* Floating businessman */}
          <img
            className="absolute top-[8rem] md:top-[7px] right-[-2rem] xl:right-[36rem] lg:right-[29rem] md:right-[17.8rem] sm:right-[-3rem] w-[178px] h-[178px] md:w-[330px] md:h-[330px] z-30 pointer-events-none"
            alt="Businessman"
            src={venturesMan}
          />

          {/* LEFT MAIN CARD */}
          <div
            className="relative rounded-2xl px-8 py-9 md:py-6 flex flex-col justify-between
        transition duration-300 hover:scale-[1.02] cursor-pointer
        w-full md:w-[45%] lg:w-[40%] min-[343px]"
            style={{
              background:
                "linear-gradient(138deg, #FCEEE8 0%, #A17F71 100%)",
              boxShadow: "0 10px 30px rgba(2,12,27,0.45)",
            }}
          >
            <div>
              <span className="text-[22px] md:text-[32px] leading-[22px] md:leading-[42px] font-bold  uppercase tracking-widest text-[#01295c]">
                Our
              </span>
              <h2 className="text-[32px] md:text-4xl md:text-5xl font-extrabold text-[#006FFF] leading-tight">
                Ventures
              </h2>

              <p className="text-sm mt-6 text-[#353636] leading-6 [font-family:'Montserrat'] max-w-[75%]">
                Learn more about our portfolio brands in the{" "}
                <strong>BFSI sector</strong>
                <br />
                in India.
              </p>
            </div>

            <button
              className="relative inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold text-white mt-6 w-fit shrink-0"
              style={{ background: "#024397" }}
            >
              Know More
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M13 6l6 6-6 6"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* RIGHT GRID LAYOUT */}
          <div className="w-full md:w-[50%] lg:w-[56%] flex flex-col gap-4 relative">
            {/* TOP CARDS ROW */}
            <div className="flex gap-4 relative z-10">
              <div
                className="rounded-2xl flex items-center justify-center text-white text-[22px] md:text-[32px] font-bold
            transition hover:scale-[1.03] cursor-pointer duration-300 flex-1 h-[150px]"
                style={{
                  background: "#f15a24",
                  boxShadow: "0 8px 18px rgba(241,90,36,0.25)",
                }}
              >
                <img
                  src={inCore}
                  alt="inCore"
                  className="w-[90px] h-auto object-contain select-none"
                />
              </div>
              <div
                className="rounded-2xl flex items-center justify-center text-white text-[22px] md:text-[32px] font-bold
            transition hover:scale-[1.03] cursor-pointer duration-300 flex-1 h-[150px]"
                style={{
                  background: "linear-gradient(90deg,#2172fd,#5bb4ff)",
                  boxShadow: "0 8px 18px rgba(33,114,253,0.2)",
                }}
              >
                INDsights
              </div>
            </div>

            {/* BOTTOM ROW */}
            <div className="flex gap-4">
              <div
                className="rounded-2xl flex items-center px-6 justify-center transition hover:scale-[1.03] cursor-pointer duration-300 flex-[2] h-[150px]"
                style={{ background: "#bcc7d3" }}
              >
                <p className="text-lg text-[20px] md:text-[18px] font-semibold text-[#000]">
                  Become Our <br />
                  <span className="text-[#1f6bff] text-[22px] md:text-[32px] font-bold">Partner →</span>
                </p>
              </div>

              <div
                className="rounded-2xl flex items-center justify-center transition hover:scale-[1.03] cursor-pointer duration-300 flex-1 h-[150px]"
                style={{ background: "linear-gradient(134deg,#fff,#ffeae0)" }}
              >
                <p className="flex flex-col text-[18px] md:text-[22px] items-start text-lg font-semibold text-center">
                  Get in <br />
                  <span className="text-[#f15a24] text-[22px] md:text-[32px] font-bold">Touch →</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
