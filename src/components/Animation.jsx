import React from "react";
import ProjectComponent from "./projectComponent";
import projectImage from "../images/kicky.png";
import projectImage2 from "../images/otf.png";
import projectImage3 from "../images/shopper.png";
import projectImage4 from "../images/oaken.png"
import { animations } from "../data/AnimationData";
import AnimationComponent from "./AnimationComponent";

const Animations = () => {
  const getPreviewUrl = (link) => {
    return `https://api.microlink.io?url=${encodeURIComponent(link)}&screenshot=true&meta=false`;
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 mt-25 px-6">
      <h2 className="[color:var(--heading_1_color)] lg:text-3xl text-xl uppercase">
        Animations
      </h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 ">
   {
    animations.map((animation, index)=>(
        <AnimationComponent img={getPreviewUrl(animation.link)} siteLink={animation.link} key={index}/>
    ))
   }
      </div>
    </section>
  );
};

export default Animations;
