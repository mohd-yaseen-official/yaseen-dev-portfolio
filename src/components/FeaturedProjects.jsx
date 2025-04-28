"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./includes/ProjectCard";
import SkeletonCard from "./includes/SkeletonCard";
import { featuredProjectsConfig } from "../../axiosConfig";

const FeaturedProjects = () => {
    const [featuredProjects, setFeaturedProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: false, margin: "-50px" });

    useEffect(() => {
        featuredProjectsConfig
            .get(
                ""
            )
            .then((response) => {
                setFeaturedProjects(response.data.data);
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

    const buttonVariants = {
        hover: {
            scale: 1.05,
            boxShadow: "0 5px 15px rgba(59, 130, 246, 0.3)",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 10,
            },
        },
        tap: {
            scale: 0.98,
        },
    };

    const renderProjectCards = () =>
        featuredProjects.map((project, index) => (
            <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                custom={index}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
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
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                aria-hidden="true"
            >
                <SkeletonCard />
            </motion.div>
        ));

    return (
        <section
            className="py-20 px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
            id="featured-projects"
            itemScope
            itemType="https://schema.org/ItemList"
        >
            <meta itemProp="name" content="Featured Projects by Yaseen" />
            <meta
                itemProp="description"
                content="Collection of Yaseen's best coding projects"
            />

            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
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

                <motion.div
                    ref={containerRef}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    itemProp="itemListElement"
                >
                    {loading ? renderSkeletonCards() : renderProjectCards()}
                </motion.div>

                <motion.div
                    className="mt-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <motion.div
                        whileHover="hover"
                        whileTap="tap"
                        variants={buttonVariants}
                        className="inline-block my-0 mx-auto rounded-full"
                    >
                        <Link
                            href="/projects"
                            className="inline-block text-sm font-medium bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition-all"
                            aria-label="View all projects by Yaseen"
                            itemProp="url"
                        >
                            View All Projects
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
