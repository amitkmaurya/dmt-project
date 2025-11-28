import { MapPinIcon } from "lucide-react"
import React from "react"
import { Button } from "../../../../components/ui/button"
import { Input } from "../../../../components/ui/input"
import { Textarea } from "../../../../components/ui/textarea"
import logo from "../../../../../src/assets/logo.svg"
import footerSlogan from "../../../../../src/assets/footerSlogan.svg"
import dotIcon17 from "../../../../assets/dotIcons/dot17.svg"
import {SocialConnect} from "../SocialConnect";

const formFields = [
  { name: "name", label: "Name", required: true },
  { name: "email", label: "Email", required: true },
  { name: "phone", label: "Phone number", required: true },
  { name: "company", label: "Company name", required: true }
]

const homeLinks = [
  { text: "About InCORE" },
  { text: "Contact US" },
  { text: "Customer Stories" },
  { text: "About IndiFly" }
]

const inCoreLinks = [
  { text: "InSurge (Marketing & Growth)" },
  { text: "InStack (Tech & Product)" },
  { text: "InVolve (HR & Culture)" },
  { text: "InSure (Legal & Compliance)" }
]

const quickLinks = [
  { text: "Blogs" },
  { text: "Privacy Policy" },
  { text: "Terms & Conditions" },
  { text: "SiteMap" }
]

export const StatsSection = () => {
  return (
    <section className="w-full flex flex-col">
      <div className="relative bg-[#01295c] overflow-hidden py-12 md:py-24 px-4">
        <img
          className="absolute top-[196px] left-3 w-[194px] h-[191px] opacity-[0.1] pointer-events-none"
          alt=""
          src={dotIcon17}
        />

        <img
          className="absolute top-7 right-[67px] w-[308px] h-[303px] opacity-[0.08] pointer-events-none"
          alt=""
          src={dotIcon17}
        />

        <div className="max-w-[1154px] mx-auto translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <div className="rounded-[32px] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] bg-[linear-gradient(46deg,rgba(255,237,228,0.2)_0%,rgba(255,220,202,0.2)_100%)] p-[28px] md:p-[42px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="bg-[linear-gradient(135deg,rgba(224,74,0,1)_30%,rgba(255,145,92,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Montserrat',Helvetica] font-semibold text-[36px] md:text-[58px] leading-[58px] mb-4">
                    Let&apos;s Talk
                  </h2>
                  <p className="[font-family:'Montserrat',Helvetica] font-normal text-[#ffffff] text-xl leading-normal">
                    Reach out to us with your queries, suggestions and
                    applications. We&apos;d be happy to explore the next growth
                    opportunity!
                  </p>
                </div>

                <div className="flex items-start gap-2 md:gap-4">
                  <MapPinIcon className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                  <div className="[font-family:'Montserrat',Helvetica] font-normal text-[#ffffff] text-xl leading-[29px]">
                    <div className="text-[17px] md:text-[20px]">4074 Ebert Summit Suite 375</div>
                    <div className="text-[17px] md:text-[20px]">Lake Leonardchester</div>
                  </div>
                </div>
              </div>

              <form className="flex flex-col gap-[17px]">
                {formFields.map(field => (
                  <div key={field.name} className="relative">
                    <Input
                      className="h-16 bg-[#1a3a62] border-0 rounded-lg shadow-[inset_0px_0px_10px_#00000026] text-[#ffffff] placeholder:text-[#ffffff] [font-family:'Montserrat',Helvetica] font-normal text-base px-[19px]"
                      placeholder={field.label}
                    />
                    {field.required && (
                      <span className="absolute top-[19px] left-[calc(19px+var(--label-width))] [font-family:'Montserrat',Helvetica] font-normal text-red text-lg ml-1 pointer-events-none">
                        *
                      </span>
                    )}
                  </div>
                ))}

                <Textarea
                  className="h-16 bg-[#1a3a62] border-0 rounded-lg shadow-[inset_0px_0px_10px_#00000026] text-[#ffffff] placeholder:text-[#ffffff] [font-family:'Montserrat',Helvetica] font-normal text-base px-[19px] py-5 resize-none"
                  placeholder="Message"
                />

                <Button
                  type="submit"
                  className="h-12 md:h-16 rounded-2xl bg-[linear-gradient(135deg,rgba(224,74,0,1)_30%,rgba(255,145,92,1)_100%)] hover:opacity-90 transition-opacity [font-family:'Montserrat',Helvetica] font-semibold text-white text-base"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>

        
      </div>

      <footer className="relative bg-[linear-gradient(180deg,rgba(1,41,92,1)_0%,rgba(0,20,45,1)_100%)] py-10 md:py-16 px-4">
        <img
          className="absolute top-[30px] left-3 w-[194px] h-[191px] opacity-[0.1] pointer-events-none"
          alt=""
          src={dotIcon17}
        />

        <img
          className="absolute left-0 bottom-0 w-full h-[116px] pointer-events-none"
          alt=""
          src={footerSlogan}
        />

        <div className="max-w-[1308px] mx-auto relative z-10">
          <div className="
            flex justify-between
            grid gap-14
            sm:grid-cols-2
            md:grid-cols-2
            lg:grid-cols-4
            xl:grid-cols-[380px_1fr_1fr_1fr]
            max-w-7xl mx-auto px-4
          ">

  {/* Column 1 - Branding */}
  <div className="reveal-left max-w-md col-span-1">
    <img
      className="w-[auto] h-[2rem]"
      alt="InCore Logo"
      src={logo}
    />

    <p className="font-montserrat text-xl font-bold text-white leading-6 mt-4">
      Building <span className="text-[#e04a00]">Ventures,</span> Building <span className="text-[#e04a00]">Nation.</span>
    </p>

    <p className="font-montserrat text-sm text-white opacity-90 max-w-[395px] leading-[27px] mt-3">
      A venture builder empowering mission-driven founders with resources and partnerships to 
      <span className="italic font-bold text-[#e04a00]"> dream, build, and grow.</span>
    </p>

    {/* <img
      className="w-[255px] h-[30px] mt-6"
      alt="Social Links"
      src="https://c.animaapp.com/mifzr6i2ruJgg2/img/fireshot-capture-009---indifly-ventures-careers---explore-job-op.png"
    /> */}

    <SocialConnect />
  </div>

  {/* Footer Navigation Section (3 columns) */}
  <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 col-span-1 lg:col-span-3">
    
    {/* Section: Home */}
    <nav className="flex flex-col gap-6">
      <h3 className="text-[#e04a00] font-bold text-xl">Home</h3>
      <ul className="flex flex-col gap-2 md:gap-4">
        {homeLinks.map((link, index) => (
          <li key={index}>
            <a href="#" className="text-white hover:text-[#e04a00] transition-colors">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>

    {/* Section: InCore */}
    <nav className="flex flex-col gap-6">
      <h3 className="text-[#e04a00] font-bold text-xl">InCore</h3>
      <ul className="flex flex-col gap-2 md:gap-4">
        {inCoreLinks.map((link, index) => (
          <li key={index}>
            <a href="#" className="text-white hover:text-[#e04a00] transition-colors">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>

    {/* Section: Quick Links */}
    <nav className="flex flex-col gap-6">
      <h3 className="text-[#e04a00] font-bold text-xl">Quick Links</h3>
      <ul className="flex flex-col gap-2 md:gap-4">
        {quickLinks.map((link, index) => (
          <li key={index}>
            <a href="#" className="text-white hover:text-[#e04a00] transition-colors">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </div>
</div>

        </div>
      </footer>
    </section>
  )
}
