import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGamepad, FaCode, FaLaptopCode, FaMobileAlt, FaBuilding } from "react-icons/fa";
import VerticalTimelineCard from "./includes/VerticalTimelineCard";

const timelineData = [
    {
        date: "Age 2",
        icon: <FaGamepad />,
        title: "Gaming Begins",
        description:
            "My journey began with video games at just 2 years old, sparking a fascination with interactive digital worlds that would shape my future path.",
    },
    {
        date: "4th Grade",
        icon: <FaCode />,
        title: "First Code",
        description:
            "Discovered the magic of web development through HTML and CSS, creating my first simple websites and unlocking a new way to express creativity.",
    },
    {
        date: "6th Grade",
        icon: <FaGamepad />,
        title: "C# Discovery",
        description:
            "Realized C# was the gateway to game development and began teaching myself the language, connecting my coding skills with my gaming passion.",
    },
    {
        date: "7th Grade",
        icon: <FaLaptopCode />,
        title: "Talrop's Tech @ School",
        description:
            "The turning point in my journey came when Talrop's program was introduced at my school, opening the door to professional development skills and certification.",
    },
    {
        date: "2023",
        icon: <FaMobileAlt />,
        title: "Full Stack Certification",
        description:
            "Completed comprehensive training in Front-end, Back-end, and Mobile development, earning my certification as a Full Stack Developer while still in middle school.",
    },
    {
        date: "2024 - Present",
        icon: <FaGamepad />,
        title: "Unity & Purpose",
        description:
            "Working with Unity to develop my first meaningful game addressing drug abuse in India—bringing my journey full circle by creating games with purpose that can make a real difference.",
    },
    {
        date: "Future Vision",
        icon: <FaBuilding />,
        title: "Game Studio Dreams",
        description:
            "Building toward my ultimate goal: creating my own game studio where creativity and social impact converge to develop experiences that entertain, inspire, and transform lives.",
    },
];

const AboutMe = () => {
    const renderTimelineCard = () =>
        timelineData.map((timeline, index) => (
            <VerticalTimelineCard key={index} timeline={timeline} />
        ));

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-5xl mx-auto mb-16 text-center" id="about">
                <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
                    About <span className="text-blue-500">Me</span>
                </h2>
                <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>

                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-left">
                    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                        From the vibrant worlds of video games that captivated
                        my childhood, a powerful curiosity ignited within me.
                        I'm{" "}
                        <span className="text-blue-500 font-semibold">
                            Mohamed Yaseen V M
                        </span>
                        , an 8th-grade student in Kerala, and my journey into
                        the heart of technology has been fueled by this wonder.
                    </p>

                    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
                        Discovering the magic of code during the pandemic felt
                        like unlocking a hidden universe. My early steps in web
                        development with <strong>HTML</strong> and{" "}
                        <strong>CSS</strong> were just the beginning, leading me
                        to the captivating realm of game development with{" "}
                        <strong>C#</strong>.
                    </p>

                    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
                        The turning point came in 7th grade with{" "}
                        <strong>Talrop's Tech @ School</strong>, where I wasn't
                        just learning; I was empowered to become a{" "}
                        <strong>Certified Full Stack Developer</strong>. Now,
                        with <strong>Unity</strong> as my canvas, my dream of
                        crafting meaningful games is taking shape.
                    </p>

                    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
                        My first project, a story-driven experience tackling
                        drug abuse in India, comes from a deep desire to use the
                        power of games for good. My ultimate vision? To build a
                        game studio where creativity and purpose intertwine,
                        creating digital worlds that not only entertain but also
                        touch hearts and minds.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto mt-20" id="journey">
                <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">
                    My <span className="text-blue-500">Journey</span>
                </h2>
                <div className="w-20 h-1 bg-blue-500 mx-auto mb-16"></div>

                <VerticalTimeline lineColor="rgba(59, 130, 246, 0.3)">
                    {renderTimelineCard()}
                </VerticalTimeline>
            </div>
        </section>
    );
};

export default AboutMe;
