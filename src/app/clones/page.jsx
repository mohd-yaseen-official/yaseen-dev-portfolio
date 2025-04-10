import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import ProjectCard from "@/components/includes/ProjectCard";

const cloneData = [
    {
        title: "Wibbitz Website Clone",
        description:
            "Cloned the full landing page of Wibbitz with a focus on media sections and animations.",
        tech: ["HTML", "CSS"],
        is_featured: true,
        type: "Full Website",
        github: "https://github.com/Fusion-boy",
    },
    {
        title: "Bitbucket Website Clone",
        description: "A full UI clone of the Bitbucket landing page.",
        tech: ["HTML", "CSS"],
        is_featured: true,
        type: "Full Website",
        github: "https://github.com/Fusion-boy",
    },
    {
        title: "Patch Website Clone",
        description: "Cloned the complete layout of the Patch homepage.",
        tech: ["HTML", "CSS"],
        is_featured: true,
        type: "Full Website",
        github: "https://github.com/Fusion-boy",
    },
    {
        title: "Bootstrap Website Clone",
        description: "Used Bootstrap to recreate a modern landing page.",
        tech: ["HTML", "Bootstrap"],
        is_featured: false,
        type: "Full Website",
        github: "https://github.com/Fusion-boy",
    },
    {
        title: "SCSS Spotlight Website Clone",
        description:
            "A stylish website layout built using SCSS to manage modular styles.",
        tech: ["HTML", "SCSS"],
        is_featured: false,
        type: "Section",
        github: "https://github.com/Fusion-boy",
    },
    {
        title: "Shake Website Clone",
        description: "Focused on landing page structure and custom styles.",
        tech: ["HTML", "CSS"],
        is_featured: false,
        type: "Section",
        github: "https://github.com/Fusion-boy",
    },
    {
        title: "Shipping Website Clone",
        description: "Cloned a logistics-themed shipping website.",
        tech: ["HTML", "CSS"],
        is_featured: false,
        type: "Section",
        github: "https://github.com/Fusion-boy",
    },
];

function Clones() {
    function renderCloneCards() {
        return cloneData.map((clone, index) => (
            <ProjectCard key={index} project={clone} />
        ));
    }
    return (
        <section className="py-20 pt-30 px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <Link
                    href="/#featured-clones"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 mb-6 transition-colors"
                >
                    <IoIosArrowBack className="mr-2" />
                    Back to Home
                </Link>
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
                    🚀 UI Clone Projects
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {renderCloneCards()}
                </div>
            </div>
        </section>
    );
}

export default Clones;
