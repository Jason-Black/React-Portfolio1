import React from "react";
import WorkItem from "./WorkItem";

const data = [
    {
      year: 2020,
      title: "Owner Operator",
      duration: "Current",
      details: "A multimedia webdesign and marketing company.",
    },
    {
      year: 2015,
      title: "Senior Broadcast Tech",
      duration: "5 Years",
      details: "Broadcast, web, multimedia Video Editor @ExtremeReach NYC, International Broadcast and Distribution",
    },
    {
      year: 2010,
      title: "Broadcast Manager",
      duration: "5 Years",
      details: "Broadcast manager and senior video editor and producer for Ingles-Markets.com (I worked for a company called BClip Producions)",
    },
    
];

const Work = () => {
    return (
        <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
            {data.map((item, idx) => (
                <WorkItem key={idx} year={item.year} title={item.title} duration={item.duartion} details={item.details} />
            ))}
        </div>
      
    )
}

export default Work