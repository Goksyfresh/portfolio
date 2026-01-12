import React from "react";
import ProjectComponent from "./projectComponent";
import projectImage from "../images/kicky.png";
import projectImage2 from "../images/otf.png";
import projectImage3 from "../images/shopper.png";

const Projects = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 mt-35 px-6">
      <h2 className="[color:var(--heading_1_color)] lg:text-3xl text-xl uppercase">
        Projects
      </h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 ">
        <a href="#">
          {" "}
          <ProjectComponent
            img={projectImage}
            title="Kickabout"
            description="A bright startup idea where users can create 5 aside football sessions with flexibility of time, location and skill level and others can join. Users also have the luxury of rating and reviewing each other after a kickabout session."
            siteLink="https://kickabout.vercel.app"
            Xlink="https://x.com/oyegoke19/status/1895226381887512891?s=46)"
            gitLink="https://github.com/Goksyfresh/Kickabout.git"
            techStack={["React Native", "React", "TypeScript", "Node.js", "Jest", "MongoDB","TailwindCSS","Zustand"]}
          />
        </a>
        <a href="#">
          {" "}
          <ProjectComponent
            img={projectImage2}
            title="OwnTheFit"
            description="A social community meets Ecommerce web app for streetwear enthusiasts and designers to connect."
            siteLink="https://ownthefit.vercel.app"
            Xlink="https://x.com/Oyegoke19/status/1985716773337854378?s=20"
            gitLink="https://github.com/Goksyfresh/OwnTheFit.git"
            techStack={["React", "TypeScript", "Node.js", "MongoDB","TailwindCSS","Redux","Cloudinary","Paystack","zod","firebase"]}
          />
        </a>
        <a href="#">
          {" "}
          <ProjectComponent
            img={projectImage3}
            title="Animated Products carousel"
            description="An animated infinite scroll product carousel"
            siteLink="https://animated-shopping-carousel.vercel.app"
            Xlink="https://x.com/Oyegoke19/status/2001220605694112236?s=20"
            gitLink="https://github.com/Goksyfresh/Animated-shopping-carousel.git"
            techStack={['React', 'TypeScript', 'GSAP', 'TailwindCSS','Lenis']}
          />
        </a>
      </div>
    </section>
  );
};

export default Projects;
