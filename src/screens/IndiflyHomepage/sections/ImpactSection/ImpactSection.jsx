import React from "react"
import { Card, CardContent } from "../../../../components/ui/card"
import jurneyHeader from "../../../../assets/jurneyHeader.png"
import redFort from "../../../../assets/redFort.svg"
import dotIcon12 from "../../../../assets/dotIcons/dot12.png"
import dotIcon13 from "../../../../assets/dotIcons/dot13.png"
import dotIcon14 from "../../../../assets/dotIcons/dot14.svg"

const metricsData = [
  {
    value: "7+",
    label: "Companies"
  },
  {
    value: "3L+",
    label: "Partners"
  },
  {
    value: "1.26Cr+",
    label: "Customers"
  }
]

export const ImpactSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(135deg,rgba(224,74,0,1)_30%,rgba(255,145,92,1)_100%)] py-16 md:py-24">
      <img
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1429px] h-auto pointer-events-none"
        alt="Background decoration"
        src={redFort}
      />

      <img
        className="absolute top-0 left-0 opacity-[0.4] w-[21.43%] h-auto pointer-events-none"
        alt="Decorative element"
        src={dotIcon12}
      />

      <img
        className="absolute bottom-0 left-[34.44%] w-[12.63%] h-auto pointer-events-none"
        alt="Decorative element"
        src={dotIcon13}
      />

      <img
        className="absolute bottom-0 opacity-[0.2] left-[-8.96%] w-[27.71%] h-auto pointer-events-none"
        alt="Decorative vector"
        src={dotIcon14}
      />

      <img
        className="absolute bottom-[5%] opacity-[0.3] right-[9.72%] w-[12.78%] h-auto pointer-events-none"
        alt="Decorative vector"
        src={dotIcon14}
      />

      <img
        className="absolute top-[16.41%] right-[2.36%] w-[4.58%] h-auto pointer-events-none"
        alt="Decorative vector"
        src={dotIcon14}
      />

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center gap-12">
        <img
          className="w-full max-w-[440px] h-auto translate-y-[-1rem] animate-fade-in opacity-0"
          alt="Indifly logo"
          src={jurneyHeader}
        />

        <h2 className="max-w-[858px] [font-family:'Montserrat',Helvetica] font-normal text-[#ffffff] text-xl text-center tracking-[0] leading-[20.1px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <span className="[font-family:'Montserrat',Helvetica] font-normal text-[#ffffff] text-xl tracking-[0] leading-[20.1px]">
            Metrics that speak of countless stories of growth{" "}
          </span>
          <span className="font-bold italic">across Bharat!</span>
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-[42px] w-full max-w-5xl">
          {metricsData.map((metric, index) => (
            <Card
              key={index}
              className="w-full max-w-[253px] h-[165px] bg-[#ffffff4c] rounded-3xl overflow-hidden border-[none] [backdrop-filter:blur(4px)_brightness(100%)_blur(2.0px)_brightness(110%)] [-webkit-backdrop-filter:blur(4px)_brightness(100%)_blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-3xl before:[background:linear-gradient(297deg,rgba(255,255,255,0.8)_0%,rgba(255,183,148,0.8)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none translate-y-[-1rem] animate-fade-in opacity-0"
              style={{
                "--animation-delay": `${400 + index * 200}ms`
              }}
            >
              <CardContent className="flex flex-col items-center justify-center h-full p-6">
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="[font-family:'Montserrat',Helvetica] font-bold text-[#ffffff] text-5xl text-center tracking-[0] leading-[48.2px] whitespace-nowrap">
                    {metric.value}
                  </div>
                  <div className="[font-family:'Montserrat',Helvetica] font-normal text-[#ffffff] text-xl text-center tracking-[0] leading-[20.1px] whitespace-nowrap">
                    {metric.label}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
