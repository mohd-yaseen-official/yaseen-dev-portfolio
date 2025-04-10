"use client";

import React from "react";
import {
    FaJs,
    FaPython,
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaUnity,
    FaSass,
    FaCode,
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiBootstrap,
    SiDjango,
    SiPostman,
    SiFigma,
    SiNextdotjs,
    SiMysql,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { BsDatabase, BsGlobe2 } from "react-icons/bs";

const skillCategories = [
    {
        title: "🖥️ Languages",
        description: "Programming languages you know",
        skills: [
            { name: "JavaScript", icon: <FaJs /> },
            { name: "Python", icon: <FaPython /> },
            { name: "C#", icon: <FaCode /> }, // Using generic code icon for C#
            { name: "HTML", icon: <FaHtml5 /> },
            { name: "CSS", icon: <FaCss3Alt /> },
            { name: "SQL", icon: <SiMysql /> },
        ],
    },
    {
        title: "🧰 Frameworks & Libraries",
        description: "Libraries and frameworks you've used",
        skills: [
            { name: "React", icon: <FaReact /> },
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "React Native", icon: <FaReact /> },
            { name: "Django", icon: <SiDjango /> },
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "Bootstrap", icon: <SiBootstrap /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss /> },
            { name: "Sass", icon: <FaSass /> },
        ],
    },
    {
        title: "🔧 Tools & Software",
        description: "Supporting tools",
        skills: [
            { name: "Git", icon: <FaGitAlt /> },
            { name: "GitHub", icon: <FaGithub /> },
            { name: "VS Code", icon: <VscVscode /> },
            { name: "Postman", icon: <SiPostman /> },
            { name: "Unity", icon: <FaUnity /> },
            { name: "Figma", icon: <SiFigma /> },
        ],
    },
    {
        title: "🔌 Other Technologies",
        description: "Broader tech concepts & systems",
        skills: [
            { name: "REST APIs", icon: <BsGlobe2 /> },
            { name: "Database Management", icon: <BsDatabase /> },
            { name: "Full-Stack Development", icon: <FaNodeJs /> },
        ],
    },
];

const Skills = () => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300" id="skills">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-4 text-center text-gray-800 dark:text-white">
                    🛠 My <span className="text-blue-500">Skills</span>
                </h2>
                <div className="w-20 h-1 bg-blue-500 mx-auto mb-16"></div>

                <div className="space-y-12">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
                        >
                            <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                                {category.title}
                            </h3>
                            <p className="mb-6 text-gray-700 dark:text-gray-300">
                                {category.description}
                            </p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                {category.skills.map((skill, idx) => (
                                    <div
                                        key={idx}
                                        className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl shadow-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white transition-all hover:scale-105 border border-blue-100 dark:border-blue-900"
                                    >
                                        <div className="text-3xl text-blue-500">
                                            {skill.icon}
                                        </div>
                                        <p className="text-sm font-medium">
                                            {skill.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
