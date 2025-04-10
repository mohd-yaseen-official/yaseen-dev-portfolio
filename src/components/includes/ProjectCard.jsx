import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
    const {
        title,
        description,
        tech = [],
        github,
        type,
        icon,
        coverImage = "https://picsum.photos/200/301",
        demoLink,
    } = project;

    const getBadgeStyle = () => {
        switch (type?.toLowerCase()) {
            case "full website":
            case "web app":
                return "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300";

            case "mobile app":
            case "section":
                return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300";

            case "cli tool":
                return "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300";

            case "unity game":
                return "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300";

            default:
                return "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300";
        }
    };

    return (
        <div className="group bg-white dark:bg-gray-800 overflow-hidden rounded-2xl shadow-lg border border-blue-100/50 dark:border-blue-900/30 flex flex-col h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
                <div className="relative w-full h-full">
                    <Image
                        src={coverImage}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        priority={false}
                    />
                </div>

                {type && (
                    <span
                        className={`absolute top-4 right-4 z-20 inline-block text-xs px-3 py-1 rounded-full font-medium ${getBadgeStyle()}`}
                    >
                        {type}
                    </span>
                )}

                {icon && (
                    <div className="absolute left-4 -bottom-4 z-20 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-md text-blue-500 text-xl">
                        {icon}
                    </div>
                )}
            </div>

            <div className="p-6 flex-grow flex flex-col">
                <h3
                    className={`text-xl font-bold mb-3 text-gray-800 dark:text-white ${
                        icon ? "mt-2" : ""
                    }`}
                >
                    {title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {tech.map((technology, index) => (
                        <span
                            key={index}
                            className="text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-600 
                        dark:text-blue-300 px-2.5 py-1 rounded-full font-medium
                        border border-blue-100 dark:border-blue-800/50"
                        >
                            {technology}
                        </span>
                    ))}
                </div>

                <div className="flex gap-3 mt-auto pt-3 border-t border-gray-100 dark:border-gray-700">
                    {github && (
                        <Link
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 
                        hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            <FaGithub className="text-lg" />
                            Code
                        </Link>
                    )}

                    {demoLink && (
                        <Link
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 
                        hover:text-blue-600 dark:hover:text-blue-400 transition-colors ml-auto"
                        >
                            <FaExternalLinkAlt />
                            Live Demo
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
