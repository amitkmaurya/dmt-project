import React, { useState } from "react";
import financeData from "../../../../../src/data/FinanceData";
import financeImage from "../../../../assets/finance.png";
import headerBg from "../../../../assets/headerBg.png"


export default function FinanceTabs() {
  const tabKeys = Object.keys(financeData);
  const [activeTab, setActiveTab] = useState(tabKeys[0]);

  const badgeKeys = Object.keys(financeData[activeTab].badges);
  const [activeBadge, setActiveBadge] = useState(badgeKeys[0]);

  const tabContent = financeData[activeTab].badges[activeBadge];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="relative max-w-[440px] mx-auto text-center">
              <img
                className="mx-auto mb-4"
                alt="INDsights logo"
                src={headerBg}
              />

              <h2 className="absolute top-[0.8rem] md:top-[1rem] left-[5rem] md:left-[7rem] [font-family:'Montserrat',Helvetica] font-bold text-[#ffffff] text-[28px] md:text-[32px] text-center tracking-[0] leading-normal whitespace-nowrap">
                Our Sectors
              </h2>
            </div>
      {/* Header */}
      <h2 className="text-center font-bold text-[1.4rem] leading-[1.8rem] md:text-3xl md:text-4xl text-orange-600">
        Integrated, <span className="text-[#0252d4]"> Inclusive </span> & Innovative
      </h2>
      <p className="text-center text-gray-600 max-w-xl mx-auto mt-2 text-sm">
        Equipping diverse brands with essential resources, expertise and unwavering support
      </p>
      
      {/* Main Tabs */}
      <div className="flex gap-4 justify-center flex-wrap mt-10">
        {tabKeys.map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 rounded-lg transition text-sm md:text-base ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => {
              setActiveTab(tab);
              const firstBadge = Object.keys(financeData[tab].badges)[0];
              setActiveBadge(firstBadge);
            }}
          >
            {tab}
          </button>
        ))}
      </div>
    
      {/* Content Section */}
      <div className="w-full xl:w-3/4 lg:w-3/4 mt-10 fflex flex-col md:flex-row items-center p-10 overflow-hidden rounded-lg md:flex-row md:items-stretch bg-[linear-gradient(73.45deg,_#FECCB2_0%,_rgba(254,204,178,0.75)_28%,_rgba(254,204,178,0.38)_48%,_rgba(254,204,178,0.15)_63%,_#FFFFFF_78%,_#FFFFFF_100%)]">

        {/* Text */}
        <div className="flex-1">
      {/* Badge Switching */}
      <div className="flex gap-2 justify-start flex-wrap">
        {badgeKeys.map((badge) => (
          <button
            key={badge}
            className={`px-4 py-1 rounded-lg border text-sm ${
              activeBadge === badge
                ? "bg-[#02295c] text-white border-blue-700"
                : "bg-white hover:bg-gray-100"
            }`}
            onClick={() => setActiveBadge(badge)}
          >
            {badge}
          </button>
        ))}
      </div>
          <h3 className="text-blue-900 mt-8 font-semibold text-lg">{tabContent.title}</h3>
          <h2 className="text-2xl md:text-3xl font-bold mt-1 text-gray-900">
            {tabContent.subtitle}
          </h2>
          
          <p className="mt-3 text-gray-700">
            {tabContent.description}
          </p>

          <ul className="mt-5 space-y-2 text-gray-700">
            {tabContent.features.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>

          <div className="flex flex-col md:flex-row mt-6 flex gap-4">
            <button className="bg-orange-500 text-white px-[4] md:px-6 py-2 md:py-3 font-medium rounded-full hover:bg-orange-600 transition">
              Install the App
            </button>
            <button className="border px-[4] md:px-6 py-2 md:py-3 rounded-full hover:bg-gray-100 transition border-[#3c3c3c] font-medium whitespace-nowrap">
              Explore More →
            </button>
          </div>
        </div>
      </div>

        {/* Right placeholder illustration (Common) */}
        <div className="relative sm:relative md:relative lg:absolute xl:absolute w-[100%] md:flex justify-center lg:top-[28.8rem] xl:left-[24rem] lg:left-[18.8rem]">
          <img src={financeImage} alt={tabContent.title} />
        </div>
      
    </div>
  );
}

