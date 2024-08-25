import React from "react";
import WorkItem from "./WorkItem";

const data = [
    {
      year: 2020,
      title: "React Fundamentals",
      duration: "3 hours",
      details: "An introductory course on React covering the basics of components, state, and props.",
    },
    {
      year: 2021,
      title: "Advanced React Patterns",
      duration: "5 hours",
      details: "A deep dive into advanced patterns in React including higher-order components, render props, and hooks.",
    },
    {
      year: 2019,
      title: "JavaScript ES6+ Features",
      duration: "2.5 hours",
      details: "An overview of new features introduced in ES6 and later versions, such as arrow functions, destructuring, and async/await.",
    },
    {
      year: 2022,
      title: "Full-Stack Development with MERN",
      duration: "10 hours",
      details: "A comprehensive course on full-stack web development using MongoDB, Express, React, and Node.js.",
    }
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