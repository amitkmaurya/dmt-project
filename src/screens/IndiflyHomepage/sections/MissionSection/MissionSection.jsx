import React from "react";
import dotIcon14 from "../../../../assets/dotIcons/dot14.svg"
import dotIcon15 from "../../../../assets/dotIcons/dot15.svg"
import dotIcon16 from "../../../../assets/dotIcons/dot16.svg"

export const MissionSection = () => {
  return (
    <section className="reveal-section relative bg-gradient-to-br from-[#01295C] to-[#004FB3] text-white overflow-hidden py-20">
      <img
        className="absolute w-0 h-[3.99%] top-[24.44%] left-[10.66%] opacity-0 animate-fade-in [--animation-delay:400ms]"
        alt="Vector"
        src={dotIcon14}
      />

      <img
        className="absolute w-[4.58%] h-[10.62%] top-[79.20%] left-[97.64%] opacity-0 animate-fade-in [--animation-delay:600ms]"
        alt="Vector"
        src={dotIcon14}
      />

      <img
        className="absolute w-[30.28%] h-[75.56%] top-[47.83%] left-[-16.94%] !opacity-10 animate-fade-in [--animation-delay:200ms]"
        alt="Vector"
        src={dotIcon14}
      />

      <img
        className="absolute w-0 top-[calc(50.00%_-_80px)] left-[32.33%] h-2.5 opacity-0 animate-fade-in [--animation-delay:500ms]"
        alt="Vector"
        src={dotIcon15}
      />

      <div className="flex flex-col md:flex-row justify-evenly mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex flex-col gap-[18px] md:gap-[46px] max-w-[709px]">
          <span className="[font-family:'Montserrat',Helvetica] font-normal text-[#ffffff] text-[18px] md:text-[28px] tracking-[0] leading-[28px] md:leading-[34.2px]">
            We create platforms and ecosystems for{" "}
            <span className="font-semibold italic text-[#ffbfa1]">
              {" "}
              mission-driven founders{" "}
            </span>{" "}
            that cultivate brands bringing about digital inclusion and
            transformative growth in the emerging regions of{" "}
          </span>
          <h2
            className="
    translate-y-[-1rem] opacity-0 animate-fade-in [--animation-delay:200ms]
    bg-[linear-gradient(90deg,#FF671F_0%,#ffffff_15%,#059f54_50%)]
    bg-clip-text text-transparent
    font-bold italic font-[Montserrat]
    text-[42px] sm:text-[64px] leading-[48px] sm:leading-[64.3px]
    tracking-[0]
  "
          >
            Bharat.
          </h2>

          <p className="translate-y-[-1rem] opacity-0 animate-fade-in [--animation-delay:400ms] [font-family:'Montserrat',Helvetica] font-normal text-[#ffffff] text-[22px] md:text-[28px] tracking-[0] leading-[34.2px]">
            <span className="[font-family:'Montserrat',Helvetica] font-normal text-[#ffffff] text-[18px] md:text-[28px] tracking-[0] leading-[34.2px]">
              We are a venture builder co-creating alongside founders in their
              journey{" "}
            </span>
            <span className="font-semibold italic">from idea to industry</span>
            <span className="[font-family:'Montserrat',Helvetica] font-normal text-[#ffffff] text-[18px] md:text-[28px] tracking-[0] leading-[28px] md:leading-[34.2px]">
              {" "}
              and{" "}
            </span>
            <span className="font-semibold italic">beyond.</span>
          </p>
        </div>

        <img
          className="translate-y-[-1rem] opacity-0 animate-fade-in [--animation-delay:600ms] w-full max-w-[412px] h-auto"
          alt="India"
          src={dotIcon16}
        />
      </div>
    </section>
  );
};
