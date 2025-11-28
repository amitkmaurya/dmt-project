import React from "react"
// import homeBanner from "../../../../assets/homeBanner.gif";
import homeBanner from "../../../../assets/homeBanner.png";

export const TitleSection = () => {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden">

  {/* Background Image */}
  <img
    src={homeBanner}
    alt="Team Working"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark Gradient Overlay */}
  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.7))]"></div>

  {/* NAVBAR */}

  {/* HERO CONTENT */}
  <div className="relative flex flex-col items-center justify-center h-full text-center px-6">
    <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mt-20 sm:mt-12">
      Building <span className="text-[#F15A24]">Ventures</span>, Building <span className="text-[#F15A24]">Nation.</span>
    </h1>

    <p className="text-white max-w-2xl mt-4 text-sm sm:text-md md:text-lg">
      A venture builder empowering mission-driven founders with resources, functional
      expertise and strategic partnerships to <span className="text-[#F15A24] font-semibold italic font-semibold">dream, build, and grow.</span>
    </p>
  </div>

</section>

  )
}
