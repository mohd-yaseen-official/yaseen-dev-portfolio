import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { GetIcon } from "@/utils/GetIcon";

const ProjectCard = ({ project }) => {
    const Icon = project.icon ? GetIcon(project.icon) : null;

    return (
        <motion.div
            className="group bg-white dark:bg-gray-800 overflow-hidden rounded-2xl shadow-lg border border-blue-100/50 dark:border-blue-900/30 flex flex-col h-full"
            whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)",
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 10,
            }}
            itemScope
            itemType="https://schema.org/CreativeWork"
        >
            <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
                <motion.div
                    className="relative w-full h-48 flex items-center justify-center overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <Image
                        src={project.image}
                        alt={`Screenshot of ${project.title} project`}
                        width={400}
                        height={250}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                        priority={false}
                        itemProp="image"
                    />
                </motion.div>

                {project.type && (
                    <motion.span
                        className={`absolute top-4 right-4 z-20 inline-block text-xs px-3 py-1 rounded-full font-medium ${project.type.styles}`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            delay: 0.3,
                            type: "spring",
                        }}
                        itemProp="genre"
                        content={project.type.title}
                    >
                        {project.type.title}
                    </motion.span>
                )}

                {Icon && (
                    <motion.div
                        className="absolute left-4 -bottom-4 z-20 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-md text-blue-500 text-xl"
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        transition={{ type: "spring" }}
                        aria-hidden="true"
                    >
                        {<Icon />}
                    </motion.div>
                )}
            </div>

            <div className="p-6 flex-grow flex flex-col">
                <motion.h3
                    className={`text-xl font-bold mb-3 text-gray-800 dark:text-white ${
                        Icon ? "mt-2" : ""
                    }`}
                    whileHover={{ color: "#3B82F6" }}
                    transition={{ duration: 0.2 }}
                    itemProp="name"
                >
                    {project.title}
                </motion.h3>

                <motion.p
                    className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    itemProp="description"
                >
                    {project.description}
                </motion.p>

                <motion.div
                    className="flex flex-wrap gap-2 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    itemProp="keywords"
                >
                    {project.technologies.map((technology) => (
                        <motion.span
                            key={technology.id}
                            className="text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-600 
                            dark:text-blue-300 px-2.5 py-1 rounded-full font-medium
                            border border-blue-100 dark:border-blue-800/50"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring" }}
                            itemProp="technology"
                        >
                            {technology.title}
                        </motion.span>
                    ))}
                </motion.div>

                <motion.div
                    className="flex gap-3 mt-auto pt-3 border-t border-gray-100 dark:border-gray-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    {project.github_link && (
                        <motion.div
                            whileHover={{ x: 3 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href={project.github_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 
                                hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                aria-label={`View ${project.title} source code on GitHub`}
                                itemProp="codeRepository"
                            >
                                <FaGithub className="text-lg" />
                                Code
                            </Link>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
