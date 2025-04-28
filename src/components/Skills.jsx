"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GetIcon } from "@/utils/GetIcon";
import { skillsConfig, skillTypesConfig } from "../../axiosConfig";

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const [types, setTypes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        Promise.all([
            skillsConfig.get(
                ""
            ),
            skillTypesConfig.get(""),
        ])
            .then(([skillsRes, typesRes]) => {
                setSkills(skillsRes.data.data);
                setTypes(typesRes.data.data);
                console.log("Skills: ", skills);
                console.log("Skill types: ", types);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
            });
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
            },
        },
    };

    const cardHoverVariants = {
        hover: {
            y: -5,
            boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 10,
            },
        },
    };

    const renderSkillCards = (filterSkills) => {
        if (isLoading) {
            return Array(3)
                .fill()
                .map((_, index) => (
                    <motion.div
                        key={`skeleton-${index}`}
                        className="h-24 rounded-xl bg-gray-200 dark:bg-gray-700 animate-pulse"
                        variants={itemVariants}
                    />
                ));
        }

        return filterSkills.map((skill) => {
            const Icon = GetIcon(skill.icon);
            return (
                <motion.div
                    key={skill.id}
                    className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl shadow-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white border border-blue-100 dark:border-blue-900"
                    variants={itemVariants}
                    whileHover="hover"
                    variants={cardHoverVariants}
                >
                    <motion.div
                        className="text-3xl text-blue-500"
                        whileHover={{ scale: 1.2 }}
                    >
                        <Icon />
                    </motion.div>
                    <p className="text-sm font-medium">{skill.title}</p>
                </motion.div>
            );
        });
    };

    const renderSkillsSection = () => {
        if (isLoading) {
            return Array(4)
                .fill()
                .map((_, index) => (
                    <motion.div
                        key={`section-skeleton-${index}`}
                        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <div className="h-8 w-1/3 mb-4 rounded bg-gray-200 dark:bg-gray-700 animate-pulse"></div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {renderSkillCards([])}
                        </div>
                    </motion.div>
                ));
        }

        return types.map((type) => {
            const filteredSkills = skills.filter(
                (skill) => skill.type == type.id
            );
            return (
                <motion.div
                    key={type.id}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                        {type.title}
                    </h3>
                    <p className="mb-6 text-gray-700 dark:text-gray-300">
                        {type.description}
                    </p>
                    <motion.div
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {renderSkillCards(filteredSkills)}
                    </motion.div>
                </motion.div>
            );
        });
    };

    return (
        <section
            className="py-20 px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
            id="skills"
        >
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
                        🛠 My <span className="text-blue-500">Skills</span>
                    </h2>
                    <motion.div
                        className="w-20 h-1 bg-blue-500 mx-auto mb-16"
                        initial={{ width: 0 }}
                        whileInView={{ width: "5rem" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                </motion.div>

                <motion.div
                    className="space-y-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {renderSkillsSection()}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
