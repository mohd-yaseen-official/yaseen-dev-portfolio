import React, { useEffect, useState } from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import VerticalTimelineCard from "./includes/VerticalTimelineCard";
import { timelineConfig } from "../../axiosConfig";

const AboutMe = () => {
    const [timelines, setTimelines] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        timelineConfig
            .get("")
            .then((response) => {
                setTimelines(response.data.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching timeline data:", err);
            });
    }, []);

    const renderTimelineCard = () =>
        timelines.map((timeline) => (
            <VerticalTimelineCard key={timeline.id} timeline={timeline} />
        ));

    const renderSkeletonTimeline = () => {
        return Array(3)
            .fill(0)
            .map((_, index) => (
                <VerticalTimelineElement
                    key={index}
                    className="vertical-timeline-element"
                    contentStyle={{
                        background: "rgba(255, 255, 255, 0.1)",
                        boxShadow: "0 3px 10px rgba(0, 0, 0, 0.1)",
                        border: "1px solid rgba(0, 0, 0, 0.05)",
                    }}
                    contentArrowStyle={{
                        borderRight: "7px solid rgba(255, 255, 255, 0.1)",
                    }}
                    iconStyle={{
                        background: "rgba(59, 130, 246, 0.3)",
                        boxShadow: "0 0 0 4px rgba(59, 130, 246, 0.1)",
                    }}
                    aria-hidden="true"
                >
                    <div className="animate-pulse" aria-hidden="true">
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-3"></div>
                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-4"></div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-5/6 mb-2"></div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-4/6 mb-2"></div>
                        <div className="mt-4 flex">
                            <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded mr-2"></div>
                        </div>
                    </div>
                </VerticalTimelineElement>
            ));
    };

    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                delay: 0.4,
                when: "beforeChildren",
                staggerChildren: 0.3,
            },
        },
    };

    const paragraphVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section
            className="py-20 px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800"
            itemScope
            itemType="https://schema.org/Person"
        >
            {/* Person Schema Markup */}
            <meta itemProp="name" content="Mohamed Yaseen V M" />
            <meta itemProp="jobTitle" content="Full Stack & Game Developer" />
            <meta
                itemProp="description"
                content="8th-grade student and certified full stack developer passionate about game development and web technologies"
            />

            <motion.div
                className="max-w-5xl mx-auto mb-16 text-center"
                id="about"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                <motion.h1
                    className="text-4xl font-bold mb-4 text-gray-800 dark:text-white"
                    variants={titleVariants}
                    itemProp="name"
                >
                    About{" "}
                    <span className="text-blue-500" itemProp="givenName">
                        Me
                    </span>
                </motion.h1>

                <motion.div
                    className="w-20 h-1 bg-blue-500 mx-auto mb-8"
                    variants={dividerVariants}
                    aria-hidden="true"
                ></motion.div>

                <motion.div
                    className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-left"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    whileHover={{
                        boxShadow: "0 10px 25px rgba(59, 130, 246, 0.2)",
                        transition: { duration: 0.3 },
                    }}
                    itemProp="description"
                >
                    <motion.p
                        className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
                        variants={paragraphVariants}
                    >
                        From the vibrant worlds of video games that captivated
                        my childhood, a powerful curiosity ignited within me.
                        I'm{" "}
                        <motion.span
                            className="text-blue-500 font-semibold"
                            whileHover={{
                                scale: 1.05,
                                color: "#2563EB",
                                transition: { duration: 0.2 },
                            }}
                            itemProp="name"
                        >
                            Mohamed Yaseen V M
                        </motion.span>
                        , an 8th-grade student in Kerala, and my journey into
                        the heart of technology has been fueled by this wonder.
                    </motion.p>

                    <motion.p
                        className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-4"
                        variants={paragraphVariants}
                        itemProp="knowsAbout"
                        content="HTML, CSS, C#, Unity"
                    >
                        Discovering the magic of code during the pandemic felt
                        like unlocking a hidden universe. My early steps in web
                        development with{" "}
                        <motion.strong
                            whileHover={{ color: "#3B82F6" }}
                            itemProp="knowsAbout"
                        >
                            HTML
                        </motion.strong>{" "}
                        and{" "}
                        <motion.strong
                            whileHover={{ color: "#3B82F6" }}
                            itemProp="knowsAbout"
                        >
                            CSS
                        </motion.strong>{" "}
                        were just the beginning, leading me to the captivating
                        realm of game development with{" "}
                        <motion.strong
                            whileHover={{ color: "#3B82F6" }}
                            itemProp="knowsAbout"
                        >
                            C#
                        </motion.strong>
                        .
                    </motion.p>

                    <motion.p
                        className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-4"
                        variants={paragraphVariants}
                    >
                        The turning point came in 7th grade with{" "}
                        <motion.strong
                            whileHover={{ color: "#3B82F6" }}
                            itemProp="memberOf"
                        >
                            Talrop's Tech @ School
                        </motion.strong>
                        , where I wasn't just learning; I was empowered to
                        become a{" "}
                        <motion.strong
                            whileHover={{ color: "#3B82F6" }}
                            itemProp="hasCredential"
                        >
                            Certified Full Stack Developer
                        </motion.strong>
                        . Now, with{" "}
                        <motion.strong
                            whileHover={{ color: "#3B82F6" }}
                            itemProp="knowsAbout"
                        >
                            Unity
                        </motion.strong>{" "}
                        as my canvas, my dream of crafting meaningful games is
                        taking shape.
                    </motion.p>

                    <motion.p
                        className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-4"
                        variants={paragraphVariants}
                    >
                        My first project, a story-driven experience tackling
                        drug abuse in India, comes from a deep desire to use the
                        power of games for good. My ultimate vision? To build a
                        game studio where creativity and purpose intertwine,
                        creating digital worlds that not only entertain but also
                        touch hearts and minds.
                    </motion.p>
                </motion.div>
            </motion.div>

            <motion.div
                className="max-w-6xl mx-auto mt-20"
                id="journey"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
            >
                <motion.h2
                    className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    My <span className="text-blue-500">Journey</span>
                </motion.h2>

                <motion.div
                    className="w-20 h-1 bg-blue-500 mx-auto mb-16"
                    initial={{ width: 0 }}
                    whileInView={{ width: "5rem" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    aria-hidden="true"
                ></motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <VerticalTimeline lineColor="rgba(59, 130, 246, 0.3)">
                        {isLoading
                            ? renderSkeletonTimeline()
                            : renderTimelineCard()}
                    </VerticalTimeline>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default AboutMe;
