"use client";

import Image from "next/image";
import Link from "next/link";
import {
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiDjango,
    SiUnity,
    SiPostgresql,
} from "react-icons/si";

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-40 pb-10 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                    Hi, I'm <span className="text-[#2476E1]">Yaseen</span> 👋
                </h1>

                <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                    Full Stack Developer
                </h2>

                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base md:w-3/4 leading-relaxed mx-auto md:mx-0">
                    Skilled in React, Next.js, Tailwind, Django, Node.js &
                    PostgreSQL. Passionate about game development with Unity —
                    building clean, modern apps & interactive stories.
                </p>

                <div className="flex items-center justify-center md:justify-start gap-5 mt-4 text-[#2476E1] text-2xl">
                    <SiReact
                        title="React"
                        className="hover:scale-110 transition-transform"
                    />
                    <SiNextdotjs
                        title="Next.js"
                        className="hover:scale-110 transition-transform"
                    />
                    <SiTailwindcss
                        title="Tailwind"
                        className="hover:scale-110 transition-transform"
                    />
                    <SiDjango
                        title="Django"
                        className="hover:scale-110 transition-transform"
                    />
                    <SiUnity
                        title="Unity"
                        className="hover:scale-110 transition-transform"
                    />
                    <SiPostgresql
                        title="PostgreSQL"
                        className="hover:scale-110 transition-transform"
                    />
                </div>

                <div className="pt-4">
                    <Link
                        href="#projects"
                        className="inline-block px-6 py-3 bg-[#2476E1] text-white font-medium rounded hover:bg-blue-700 transition"
                    >
                        Explore My Work
                    </Link>
                </div>
            </div>

            <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center relative">
                <div className="absolute w-80 h-80 bg-blue-400 rounded-full blur-3xl opacity-30 dark:opacity-20 -top-10 -left-10 z-0"></div>
                <Image
                    src="/hero-image.svg"
                    alt="Developer Illustration"
                    width={600}
                    height={600}
                    priority
                    className="z-10 max-w-full h-auto"
                />
            </div>
        </section>
    );
};

export default Hero;
