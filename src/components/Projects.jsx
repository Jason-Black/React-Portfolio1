import React from "react";
import ProjectItem from "./ProjectItem";
import propertyImg from "../assets/defi-web.jpg"
import cryptoImg from "../assets/JessHomes-web.jpg"
import netflixImg from "../assets/developer-web.jpg"
import twitchImg from "../assets/loginscreen-web.jpg"

const Projects = () => {
    return (
        <div id='projects' className="max-w-[1040px] m-auto md:pl-20 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
            <p className="text-center py-8">a lot of dummy text oh wow this is a lot of text it is taking sooooo long ti type it allxt oh wow this is a lot of text it ixt oh wow this is a lot of text it ixt oh wow this is a lot of text it i</p>
       
     
        <div className="grid sm:grid-cols-2 gap-12">
            <ProjectItem img={cryptoImg} title='Crypto App'/>
            <ProjectItem img={propertyImg} title='Property App'/>
            <ProjectItem img={netflixImg} title='Netflix App'/>
            <ProjectItem img={twitchImg} title='Twitch App'/>


</div>
        </div>
    );
};

export default Projects