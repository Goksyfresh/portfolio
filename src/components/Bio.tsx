import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
gsap.registerPlugin(SplitText);
import React from "react";

const Bio = () => {
  useGSAP(() => {
    const split = new SplitText("section p", {
      type: "lines",
      linesClass: "lineChildren",
      mask: "lines",
    });
    gsap.fromTo(
      split.lines,
      { opacity: 0, y: 20 },
      { opacity: 1, duration: 1, y: 0, stagger: 0.1, ease: "power2.out" }
    );
  }, []);
  return (
    <section className="flex flex-col items-center justify-center gap-4 mt-35 px-4">
      <h2 className="[color:var(--heading_1_color)] font-bold lg:text-3xl text-xl uppercase">
        About me
      </h2>
      <p className="[color:var(--text-color)] lg:text-xl text-lg w-[80%] text-center">
        I’m a frontend developer with a strong software engineering foundation
        and a deep appreciation for how things feel as much as how they work. I
        enjoy building interfaces that don’t just function, but engage — often
        through thoughtful animation, subtle interactions, and clean visual
        flow. For me, good UI isn’t about flash; it’s about guiding users
        naturally, making products intuitive, and bringing ideas to life in a
        way that feels intentional and alive.
      </p>
      <p className="[color:var(--text-color)] lg:text-xl text-lg w-[80%] text-center">
        Alongside building software, I’m a technical writer who cares about
        clarity and usefulness. I write articles that break down complex
        concepts into understandable ideas, and several of my pieces have ranked
        on Google’s front page. Writing helps me think better as an engineer —
        it forces precision, honesty, and empathy for the reader. Whether I’m
        designing an interface, architecting a feature, or explaining how
        something works, my goal is the same: turn ideas into real, well-crafted
        products that people enjoy using and learning from.
      </p>
    </section>
  );
};

export default Bio;
