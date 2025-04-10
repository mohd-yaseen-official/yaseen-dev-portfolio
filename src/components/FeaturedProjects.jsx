"use client";

import Link from "next/link";
import {
    FaMapMarkerAlt,
    FaBlog,
    FaGraduationCap,
    FaSun,
    FaCloudSun,
    FaGamepad,
    FaCalendarAlt,
    FaPlane,
    FaTasks,
} from "react-icons/fa";
import ProjectCard from "./includes/ProjectCard";

const projectData = [
    {
        title: "EventEase",
        icon: <FaCalendarAlt />,
        type: "Web App",
        description:
            "EventEase streamlines schedule management for busy professionals with an interactive dashboard displaying daily, monthly, and yearly event distributions. Features include rich text descriptions, comprehensive filtering by date/category/priority/tags, role-based user access and responsive cross-device design.",
        tech: ["Django", "PostgreSQL"],
        github: "https://github.com/sample/eventease",
    },
    {
        title: "BlogHub",
        type: "Web App",
        icon: <FaBlog />,
        description:
            "BlogHub is a versatile blogging platform enabling users to create, publish, and edit engaging content. Key features include a rich text editor, efficient search and category-based filtering, the ability to tag posts with multiple categories, user-friendly pagination, and secure authentication for content creators.",
        tech: ["Django", "PostgreSQL"],
        github: "https://github.com/sample/bloghub",
    },
    {
        title: "Weather App (Mock)",
        icon: <FaCloudSun />,
        type: "Mobile App",
        description:
            "Weather App is a UI-focused mockup React Native mobile app showcases a weather forecast UI with weekly forecast notifications. The main screen displays today's weather with an icon, temperature, humidity, and wind details, along with a timely forecast breakdown.",
        tech: ["React Native"],
        github: "https://github.com/sample/weather-app",
    },
    {
        title: "E-Learning App (Mock)",
        icon: <FaGraduationCap />,
        type: "Mobile App",
        description:
            "E-Learning App is a mockup React Native e-learning app showcases authentication (OTP login/register), diverse subjects with elegant topic/subtopic divisions, and comprehensive learning tracking. Features include a profile, main progress dashboard, video classes, and seamless 'topic unlocking' mechanism for continuous learning. The UI focuses on an engaging and intuitive experience.",
        tech: ["React Native"],
        github: "https://github.com/sample/elearning",
    },
    {
        title: "Knight Roam",
        type: "Unity Game",
        icon: <FaGamepad />,
        description:
            "Knight Roam is a charming 2D platformer built with Unity where you play a brave frog knight on a coin-collecting adventure through mysterious pixel art forests. Features precise platforming controls, level completion mechanics, and a score system. Currently in development with planned additions like more levels, enemies, power-ups, and sound.",
        tech: ["Unity", "C#"],
        github: "https://github.com/sample/knight-roam",
    },
    {
        title: "GeoFy",
        icon: <FaMapMarkerAlt />,
        type: "CLI Tool",
        description:
            "GeoFy is a CLI tool designed to capture user geolocation via and browser services. It uses tunneling to create shareable links and displays coordinates on Google Maps. Features automatic dependency installation and an interactive setup. Future updates include custom ports, URL shorteningand more. Use responsibly for educational purposes only.",
        tech: ["Python", "WebSockets", "CLI"],
        github: "https://github.com/sample/mocktravel",
    },
    {
        title: "MockTravel App",
        icon: <FaPlane />,
        type: "Web App",
        description:
            "MokeTravels is a React travel guide app with a Django REST API, featuring JWT authentication. It showcases place cards on the home page, each linking to detailed pages with galleries, descriptions, and support for liking and commenting.",
        tech: ["Django", "React"],
        github: "https://github.com/sample/mocktravel",
    },
    {
        title: "Todo App",
        icon: <FaTasks />,
        type: "Web App",
        description:
            "Todo App is a streamlined single-page Todo application developed with a React frontend and a Django REST API backend. It offers comprehensive todo management functionalities, including adding, completing, and reverting tasks, all presented within a clean and intuitive user interface.",
        tech: ["Django", "React"],
        github: "https://github.com/sample/todo-app",
    },
];
const FeaturedProjects = () => {
    const renderProjectCards = () =>
        projectData.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
        ));

    return (
        <section
            className="py-20 px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
            id="featured-projects"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-4 text-center text-gray-800 dark:text-white">
                    🚀 My <span className="text-blue-500">Projects</span>
                </h2>
                <div className="w-20 h-1 bg-blue-500 mx-auto mb-16"></div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {renderProjectCards()}
                </div>

                <div className="mt-8 text-center">
                    <Link
                        href="/projects"
                        className="inline-block text-sm font-medium bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition-all"
                    >
                        View All Projects
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
