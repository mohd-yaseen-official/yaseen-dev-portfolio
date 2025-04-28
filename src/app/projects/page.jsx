"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import ProjectCard from "@/components/includes/ProjectCard";
import SkeletonCard from "@/components/includes/SkeletonCard";
import { projectsConfig } from "../../../axiosConfig";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isVisible] = useState(true);

    useEffect(() => {
        projectsConfig
            .get("")
            .then((response) => {
                setProjects(response.data.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching projects:", err);
            });
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
                duration: 0.5,
                ease: "easeOut"
            },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.6,
            },
        },
    };

    const titleVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
            },
        },
    };

    const dividerVariants = {
        hidden: { width: 0 },
        visible: {
            width: "5rem",
            transition: {
                duration: 0.8,
                delay: 0.3,
            },
        },
    };

    const renderProjectCards = () =>
        projects.map((project) => (
            <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                custom={project.id}
                itemScope
                itemType="https://schema.org/CreativeWork"
            >
                <ProjectCard project={project} />
            </motion.div>
        ));

    const renderSkeletonCards = () =>
        [...Array(3)].map((_, index) => (
            <motion.div 
                key={index} 
                variants={itemVariants} 
                custom={index}
                aria-hidden="true"
            >
                <SkeletonCard />
            </motion.div>
        ));

    return (
        <section
            className="py-20 pt-30 px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
            id="projects"
            itemScope
            itemType="https://schema.org/ItemList"
        >
            <meta itemProp="name" content="Yaseen's Project Portfolio" />
            <meta itemProp="description" content="Collection of web development and game development projects created by Yaseen" />
            
            <div className="max-w-6xl mx-auto">
                <motion.div
                    whileHover={{ x: -5 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <Link
                        href="/#featured-projects"
                        className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 mb-6 transition-colors"
                        aria-label="Back to home"
                        itemProp="relatedLink"
                    >
                        <motion.span
                            animate={{ x: [0, -3, 0] }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "reverse",
                                duration: 1.5
                            }}
                            aria-hidden="true"
                        >
                            <IoIosArrowBack className="mr-2" />
                        </motion.span>
                        Back to Home
                    </Link>
                </motion.div>

                <AnimatePresence>
                    {isVisible && (
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            className="text-center"
                        >
                            <motion.h1
                                className="text-4xl font-bold mb-4 text-gray-800 dark:text-white"
                                variants={titleVariants}
                                itemProp="headline"
                            >
                                🚀 My <span className="text-blue-500">Projects</span>
                            </motion.h1>
                            <motion.div
                                className="w-20 h-1 bg-blue-500 mx-auto mb-16"
                                variants={dividerVariants}
                                aria-hidden="true"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {isVisible && (
                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            itemProp="itemListElement"
                        >
                            {loading ? renderSkeletonCards() : renderProjectCards()}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects;