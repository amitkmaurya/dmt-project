import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { HeroSection } from "./sections/HeroSection";
import { ImpactSection } from "./sections/ImpactSection";
import { MissionSection } from "./sections/MissionSection";
import { StatsSection } from "./sections/StatsSection";
import { TitleSection } from "./sections/TitleSection";
import FinanceTabs from "./sections/Services/Service";
import IndSightImg from "../../../src/assets/indsight.png"
import {PuzzleGrid} from "./sections/PuzzleGrid";
import puzzleImage from "../../../src/assets/puzzleGrid.svg";
import headerBg from "../../../src/assets/headerBg.png"
import logo from "../../../src/assets/logo.svg"
import searchIcon from "../../assets/search.svg"
import dotIcon1 from "../../assets/dotIcons/dot1.png"
import dotIcon2 from "../../assets/dotIcons/dot2.png"
import dotIcon3 from "../../assets/dotIcons/dot3.png"
import dotIcon4 from "../../assets/dotIcons/dot4.png"
import dotIcon5 from "../../assets/dotIcons/dot5.png"
import dotIcon6 from "../../assets/dotIcons/dot6.png"
import dotIcon7 from "../../assets/dotIcons/dot7.png"
import dotIcon8 from "../../assets/dotIcons/dot8.svg"
import dotIcon9 from "../../assets/dotIcons/dot9.svg"


const navItems = [
  { label: "Our Portfolio", href: "#portfolio" },
  { label: "InCORE", href: "#incore" },
  { label: "INDsights", href: "#insights" },
  { label: "About us", href: "#about" },
  { label: "Get in Touch", href: "#contact" },
];

export const IndiflyHomepage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="overflow-hidden bg-lightmenu-bg w-full relative"
      data-model-id="3:497"
    >
      <header className="flex w-full items-center justify-center gap-2.5 p-2.5 fixed top-0 left-0 bg-[linear-gradient(90deg,rgba(2,67,151,1)_0%,rgba(224,74,0,1)_100%)] z-50 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
        <p className="relative flex items-center justify-center w-fit [font-family:'Montserrat',Helvetica] font-normal text-[#ffffff] text-sm tracking-[-0.15px] leading-6 whitespace-nowrap">
          <span className="font-medium tracking-[-0.02px] break-words whitespace-normal">
            Get your business up &amp; running with our unparalleled expertise |
            Use Code: <b>WelcomeInd.</b>
          </span>
        </p>
      </header>

      <nav className="fixed top-14 mt-10 md:mt-6 lg:mt-4 left-0 w-full z-40 px-4">
        <div className="w-full max-w-full sm:max-w-[700px] md:max-w-[900px] lg:max-w-[1100px] mx-auto flex items-center justify-between flex-wrap bg-white/30 bg-[color-mix(in oklab,var(--color-white)30%,transparent)] backdrop-blur-lg rounded-2xl border border-white/50 shadow-lg px-4 py-3">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              className="w-[5rem] lg:md-[8rem] md:w-[7rem]"
              src={logo}
              alt="Indifly"
            />
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex flex-1 justify-end flex-wrap gap-3 lg:gap-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <Button
                  variant="ghost"
                  className="group text-md px-2 lg:px-4 relative font-medium text-gray-900 transition-colors hover:text-gray-800"
                  asChild
                >
                  <a href={item.href}>{item.label}</a>
                </Button>
              </li>
            ))}
          </ul>

          {/* Search Button */}
          <div className="hidden md:flex flex-shrink-0 px-4">
            <button className="w-12 h-12 flex justify-center items-center bg-white/40 rounded-2xl backdrop-blur-sm hover:bg-white/60 transition">
              <img
                className="w-6 h-6"
                src={searchIcon}
                alt="Search"
              />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex-shrink-0">
            <button
              onClick={() => setOpen(!open)}
              className="p-2 w-10 h-10 flex items-center justify-center rounded-xl bg-white/40 hover:bg-white/60 transition"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                {open ? (
                  <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Dropdown */}
          <div className={`${open ? "block" : "hidden"} md:hidden w-full mt-4`}>
            <ul className="flex flex-col gap-4 bg-[#a8a8a8] md:bg-white/50 backdrop-blur-md rounded-xl p-4 border border-white/40">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="block text-gray-800 text-lg font-medium hover:text-primary-color"
                  >
                    {item.label}
                  </a>
                </li>
              ))}

              <button className="w-full flex justify-center align-center bg-white/40 rounded-xl py-3 mt-2">
                <img
                  className="w-6 h-6"
                  src={searchIcon}
                  alt="Search"
                />
              </button>
            </ul>
          </div>
        </div>
      </nav>

      <main className="relative w-full pt-[43px]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1408px] h-[914px] pointer-events-none opacity-60">
          <img
            className="w-full h-full object-cover"
            alt="Background decoration"
            src={dotIcon1.png}
          />
        </div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] flex flex-col gap-[4415px] opacity-60 pointer-events-none">
          <div className="ml-[-292px] w-[1440px] h-[942px] flex rotate-180">
            <img
              className="mt-[526.1px] w-[1440px] h-[415.91px] ml-[292px] -rotate-180"
              alt="Background pattern"
              src={dotIcon2}
            />
          </div>

          <div className="h-[659px] relative">
            <img
              className="absolute w-[62.70%] h-[74.00%] top-[3.90%] left-0"
              alt="Background pattern"
              src={dotIcon3}
            />
          </div>
        </div>

        <div className="relative w-full max-w-[1880px] mx-auto">
          
          <img
            className="absolute w-[29.22%] h-auto opacity-15 top-[54.98%] left-0 pointer-events-none"
            alt="Decorative element"
            src={dotIcon4}
          />

          <TitleSection />

          <HeroSection />

          <MissionSection />

          <section className="relative w-full py-10 md:py-16 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <div className="absolute top-[2378px] left-[1137px] w-[630px] h-[630px] rounded-[83px] rotate-[-108.37deg] bg-[linear-gradient(36deg,rgba(255,255,255,1)_0%,rgba(255,234,223,1)_100%)] pointer-events-none" />

            <FinanceTabs />
 <div className="max-w-[1113px] mx-auto mt-8 px-4">
              <h2 className="[font-family:'Montserrat',Helvetica] font-extrabold text-[2rem] md:text-4xl text-center tracking-[-0.40px] leading-6">
                <span className="text-[#353636] leading-[43px] tracking-[-0.14px]">
                  {" "}
                  Integrated expertise, delivered at{" "}
                </span>
                <span className="text-[#d15a31] tracking-[-0.14px]">
                  every stage.
                </span>
              </h2>
            </div>
            <div className="max-w-[816px] mx-auto mt-12 px-4">
              <p className="[font-family:'Montserrat',Helvetica] font-normal text-[#353636] text-xl text-center tracking-[-0.22px] leading-[27px]">
                <span className="font-semibold tracking-[-0.04px]">
                  We don&apos;t just advise, we embed.{" "}
                </span> <br />
                <span className="font-medium tracking-[-0.04px]"> </span>
                <span className="font-medium text-base tracking-[-0.03px]">
                  With{" "}
                </span>
                <span className="font-bold text-base tracking-[-0.03px]">
                  inSTACK
                </span>
                <span className="font-medium text-base tracking-[-0.03px]">
                  ,
                </span>
                <span className="font-bold text-base tracking-[-0.03px]">
                  {" "}
                  inSURGE
                </span>
                <span className="font-medium text-base tracking-[-0.03px]">
                  ,{" "}
                </span>
                <span className="font-bold text-base tracking-[-0.03px]">
                  inSURE
                </span>
                <span className="font-medium text-base tracking-[-0.03px]">
                  , and{" "}
                </span>
                <span className="font-bold text-base tracking-[-0.03px]">
                  inVOLVE
                </span>
                <span className="font-medium text-base tracking-[-0.03px]">
                  {" "}
                  founders gain the muscle of execution alongside <br /> strategic
                  leadership guidance.
                </span>
              </p>
            </div>

            <img
              className="hidden lg:block w-full max-w-[1247px] mx-auto px-4 animate-fade-in"
              alt="Service framework"
              src={puzzleImage}
            />

            <div className="block lg:hidden animate-fade-in">
              <PuzzleGrid />
            </div>


          </section>

          <ImpactSection />

          <img
            className="absolute w-[17.56%] h-auto top-[56.07%] left-[80.28%] pointer-events-none"
            alt="Decorative element"
            src={dotIcon5}
          />

          <section className="relative w-full bg-[#ffece4] overflow-hidden py-16 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <img
              className="absolute w-[29.22%] opacity-[0.4] h-auto top-0 left-0 pointer-events-none"
              alt="Decorative pattern"
              src={dotIcon6}
            />

            <img
              className="absolute w-[38.05%] opacity-[0.7] h-auto top-[49.43%] left-[76.32%] pointer-events-none"
              alt="Decorative pattern"
              src={dotIcon7}
            />

            <img
              className="absolute w-0 h-[3.47%] top-[28.92%] left-[82.19%] pointer-events-none"
              alt="Decorative vector"
              src={dotIcon8}
            />

            <img
              className="absolute w-[4.58%] h-[9.23%] top-[3.55%] left-[97.64%] pointer-events-none"
              alt="Decorative vector"
              src={dotIcon9}
            />

            <div className="relative max-w-[440px] mx-auto text-center">
              <img
                className="mx-auto mb-4"
                alt="INDsights logo"
                src={headerBg}
              />

              <h2 className="absolute top-[0.8rem] md:top-[1rem] left-[5rem] md:left-[7rem] [font-family:'Montserrat',Helvetica] font-bold text-[#ffffff] text-[28px] md:text-[32px] text-center tracking-[0] leading-normal whitespace-nowrap">
                INDsights
              </h2>
            </div>

            <div className="w-full px-4 py-10">
      <div className="relative max-w-6xl mx-auto grid gap-6 z-20 sm:grid-cols-2 lg:grid-cols-3">

        {/* Card 1 */}
        <div className="p-5 rounded-2xl border bg-white shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Lorem Ipsum Title</h3>
          <p className="text-sm text-gray-600 mb-4">
            Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title
          </p>
          <img
            src={IndSightImg}
            alt="blog"
            className="rounded-xl mb-4 w-full object-cover"
          />
          <button className="border rounded-full w-full py-2 text-sm hover:bg-gray-100 transition">
            Read more →
          </button>
        </div>

        {/* Card 2 */}
        <div className="p-5 rounded-2xl border bg-white shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Lorem Ipsum Title</h3>
          <p className="text-sm text-gray-600 mb-4">
            Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title
          </p>
          <img
            src={IndSightImg}
            alt="blog"
            className="rounded-xl mb-4 w-full object-cover"
          />
          <button className="border rounded-full w-full py-2 text-sm hover:bg-gray-100 transition">
            Read more →
          </button>
        </div>

        {/* Card 3 */}
        <div className="p-5 rounded-2xl border bg-white shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Lorem Ipsum Title</h3>
          <p className="text-sm text-gray-600 mb-4">
            Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title
          </p>
          <img
            src={IndSightImg}
            alt="blog"
            className="rounded-xl mb-4 w-full object-cover"
          />
          <button className="border rounded-full w-full py-2 text-sm hover:bg-gray-100 transition">
            Read more →
          </button>
        </div>

      </div>
    </div>
          </section>

          <StatsSection />
        </div>
      </main>
    </div>
  );
};
