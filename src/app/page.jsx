"use client";

import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import FeaturedProjects from "@/components/FeaturedProjects";
import FeaturedClones from "@/components/FeaturedClones";
import Contact from "@/components/Contact";

const Home = () => {
    return (
        <>
            <Hero />
            <AboutMe />
            <Skills />
            <FeaturedProjects />
            <FeaturedClones />
            <Contact />
        </>
    );
};

export default Home;
