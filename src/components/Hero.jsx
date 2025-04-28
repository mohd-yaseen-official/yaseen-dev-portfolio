"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { GetIcon } from "@/utils/GetIcon";
import DotBackground from "./includes/DotBackground";
import { featuredSkillsConfig } from "../../axiosConfig";

const Hero = () => {
    const [featuredSkills, setFeaturedSkills] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const typedRef = useRef(null);
    const typedInstanceRef = useRef(null);

    useEffect(() => {
        if (typedRef.current) {
            typedInstanceRef.current = new Typed(typedRef.current, {
                strings: [
                    "Full Stack Developer",
                    "Game Developer",
                ],
                typeSpeed: 70,
                backSpeed: 50,
                backDelay: 1500,
                startDelay: 500,
                loop: true,
                showCursor: true,
                cursorChar: "|",
            });
        }

        return () => {
            if (typedInstanceRef.current) {
                typedInstanceRef.current.destroy();
            }
        };
    }, []);

    useEffect(() => {
        featuredSkillsConfig
            .get("")
            .then((response) => {
                setFeaturedSkills(response.data.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching skills:", err);
            });
    }, []);

    const renderFeaturedSkills = () => {
        if (isLoading) {
            return (
                <div className="flex gap-4" aria-label="Loading skills">
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"
                            aria-hidden="true"
                        />
                    ))}
                </div>
            );
        }

        return featuredSkills.map((skill, index) => {
            const Icon = GetIcon(skill.icon);
            return (
                <motion.div
                    key={skill.id || index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.6 + index * 0.1,
                        ease: "easeOut",
                    }}
                >
                    <Icon
                        title={`${skill.title} - Yaseen's expertise`}
                        className="text-[#2476E1] hover:scale-110 transition-transform w-8 h-8"
                        aria-hidden="true"
                    />
                </motion.div>
            );
        });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const imageVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    const floatingAnimation = {
        y: [0, -15, 0],
        transition: {
            duration: 6,
            repeat: Infinity,
            repeatType: "mirror",
        },
    };

    return (
        <section
            className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 pt-32 md:pt-40 pb-10 bg-white dark:bg-gray-900 transition-colors duration-300"
            itemScope
            itemType="https://schema.org/Person"
        >
            {/* Schema.org markup for personal branding */}
            <meta itemProp="name" content="Yaseen" />
            <meta itemProp="jobTitle" content="Full Stack & Game Developer" />
            <meta
                itemProp="description"
                content="Skilled in React, Next.js, Tailwind, Django, Node.js & PostgreSQL. Passionate about game development with Unity."
            />

            {/* Dot Background */}
            <DotBackground />

            {/* Animated Gradient Blobs */}
            <motion.div
                className="absolute top-1/4 right=1/4 sm:right-auto sm:left-1/4 w-64 h-64 bg-blue-400/20 dark:bg-blue-400/10 rounded-full blur-3xl"
                animate={{
                    x: [0, 30, 0],
                    y: [0, -30, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                }}
                aria-hidden="true"
            />
            <motion.div
                className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-purple-400/20 dark:bg-purple-400/10 rounded-full blur-3xl"
                animate={{
                    x: [0, -30, 0],
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                }}
                aria-hidden="true"
            />

            <motion.div
                className="w-full lg:w-1/2 text-center lg:text-left space-y-4 md:space-y-6 z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white"
                    variants={itemVariants}
                    itemProp="name"
                >
                    Hi, I'm{" "}
                    <motion.span
                        className="text-[#2476E1]"
                        whileHover={{
                            scale: 1.05,
                            color: "#3b82f6",
                            transition: { duration: 0.2 },
                        }}
                        aria-label="Yaseen - Developer"
                        itemProp="givenName"
                    >
                        Yaseen
                    </motion.span>
                    <motion.span
                        animate={{ rotate: [0, 20, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="inline-block"
                        aria-hidden="true"
                    >
                        👋
                    </motion.span>
                </motion.h1>

                <motion.h2
                    className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 min-h-[2rem] w-full"
                    variants={itemVariants}
                    itemProp="jobTitle"
                >
                    <span ref={typedRef} className="inline-block w-full"></span>
                </motion.h2>

                <motion.p
                    className="text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0"
                    variants={itemVariants}
                    itemProp="description"
                >
                    Skilled in <span itemProp="knowsAbout">React</span>,{" "}
                    <span itemProp="knowsAbout">Next.js</span>,{" "}
                    <span itemProp="knowsAbout">Tailwind</span>,{" "}
                    <span itemProp="knowsAbout">Django</span>,{" "}
                    <span itemProp="knowsAbout">Node.js</span> &{" "}
                    <span itemProp="knowsAbout">PostgreSQL</span>. Passionate
                    about <span itemProp="knowsAbout">game development</span>{" "}
                    with <span itemProp="knowsAbout">Unity</span> — building
                    clean, modern apps & interactive stories.
                </motion.p>

                <motion.div
                    className="flex items-center justify-center lg:justify-start gap-5 mt-4 text-[#2476E1] text-2xl"
                    variants={itemVariants}
                    aria-label="Technical Skills"
                >
                    {renderFeaturedSkills()}
                </motion.div>

                <motion.div className="pt-4" variants={itemVariants}>
                    <Link href="/projects" passHref legacyBehavior>
                        <motion.a
                            className="px-6 py-3 bg-[#2476E1] text-white font-medium rounded-lg hover:bg-blue-700 transition text-sm sm:text-base"
                            whileHover={{
                                scale: 1.05,
                                boxShadow:
                                    "0 10px 25px -5px rgba(36, 118, 225, 0.5)",
                            }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="View Yaseen's portfolio projects"
                            itemProp="url"
                        >
                            Explore My Work
                        </motion.a>
                    </Link>
                </motion.div>
            </motion.div>

            <motion.div
                className="w-full lg:w-1/2 mt-12 md:mt-16 lg:mt-0 flex justify-center relative z-10"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
            >
                <div
                    className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-blue-400 rounded-full blur-3xl opacity-30 dark:opacity-20 -top-10 -left-10 z-0"
                    aria-hidden="true"
                />
                <motion.div
                    animate={floatingAnimation}
                    className="z-10 w-full max-w-md lg:max-w-lg"
                >
                    <Image
                        src="/hero-image.svg"
                        alt="Yaseen - Web and Game Developer Illustration"
                        width={600}
                        height={600}
                        priority
                        className="w-full h-auto"
                        itemProp="image"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
