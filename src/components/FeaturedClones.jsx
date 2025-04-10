import Link from "next/link";
import ProjectCard from "./includes/ProjectCard";

const clones = [
    {
        title: "Wibbitz Clone",
        type: "Full Website",
        tech: ["HTML", "CSS"],
        description: "UI clone of Wibbitz homepage using HTML and CSS.",
        featured: true,
        github: "https://github.com/Fusion-boy",
    },
    {
        title: "Bitbucket Clone",
        type: "Full Website",
        tech: ["HTML", "CSS"],
        description:
            "A complete UI replication of Bitbucket using responsive design.",
        featured: true,
        github: "https://github.com/Fusion-boy",
    },
    {
        title: "Patch Website Clone",
        type: "Full Website",
        tech: ["HTML", "CSS"],
        description:
            "Patch site clone featuring smooth layouts and reusable components.",
        featured: true,
        github: "https://github.com/Fusion-boy",
    },
    {
        title: "Bootstrap Website",
        type: "Full Website",
        tech: ["HTML", "Bootstrap"],
        description: "Landing page built with Bootstrap styling and structure.",
        featured: false,
        github: "https://github.com/Fusion-boy",
    },
    {
        title: "SCSS Spotlight",
        type: "Full Website",
        tech: ["SCSS"],
        description:
            "Responsive site with advanced SCSS effects and transitions.",
        featured: false,
        github: "https://github.com/Fusion-boy",
    },
];

export default function Clones() {
    const featuredClones = clones.filter((clone) => clone.featured);

    const renderFeaturedClones = () =>
        featuredClones.map((clone, index) => (
            <ProjectCard key={index} project={clone} />
        ));

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300" id="featured-clones">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
                    🚀 UI Clone Projects
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {renderFeaturedClones()}
                </div>

                <div className="mt-8 text-center">
                    <Link
                        href="/clones"
                        className="inline-block text-sm font-medium bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition-all"
                    >
                        View All Clones
                    </Link>
                </div>
            </div> 
        </section>
    );
}
