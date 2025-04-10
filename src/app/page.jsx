"use client";

import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import FeaturedClones from "@/components/FeaturedClones";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Skills from "@/components/Skills";

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
