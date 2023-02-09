import React from "react";
import Homepage from "../app/homepage/page";
import Hero from "../app/hero/page";
import About from "../app/about/page";
import Portfolio from "../app/portfolio/page";
import TechStuff from "../app/techstuff/page";
import Contact from "../app/contact/page";
import Footer from "../app/footer/page";

const page: React.FunctionComponent = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0">
      <section className="pt-32 snap-start" id="hero">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="techstuff" className="snap-center">
        <TechStuff />
      </section>
      <section className="snap-start" id="portfolio">
        <Portfolio />
      </section>
      <section className="snap-center" id="contact">
        <Contact />
      </section>
      <section className="snap-center" id="contact">
        <Footer />
      </section>
    </div>
  );
};

export default page;
