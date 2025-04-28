"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import axios from "axios";
import { motion } from "framer-motion";
import { GetIcon } from "@/utils/GetIcon";
import { socialLinksConfig } from "../../../axiosConfig";

const Footer = () => {
    const [socialLinks, setSocialLinks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        socialLinksConfig
            .get("/")
            .then((response) => {
                setSocialLinks(response.data.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching social links:", err);
            });
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
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
        hover: {
            y: -5,
            scale: 1.1,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10,
            },
        },
    };

    const heartBeatVariants = {
        pulse: {
            scale: [1, 1.2, 1],
            transition: {
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
            },
        },
    };

    const renderSocialMediaLinks = () => {
        if (isLoading) {
            return Array(5)
                .fill()
                .map((_, index) => (
                    <motion.div
                        key={`skeleton-${index}`}
                        className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"
                        variants={itemVariants}
                        aria-hidden="true"
                    />
                ));
        }

        return socialLinks.map((platform) => {
            const Icon = GetIcon(platform.icon);
            return (
                <motion.a
                    key={platform.id}
                    href={
                        platform.platform === "Email"
                            ? `mailto:${platform.url}`
                            : platform.url
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#2476E1] dark:text-gray-400 transition-colors"
                    aria-label={`Connect with me on ${platform.platform}`}
                    variants={itemVariants}
                    whileHover="hover"
                    itemProp="sameAs"
                >
                    <Icon className="text-2xl" />
                </motion.a>
            );
        });
    };

    return (
        <motion.footer
            className="bg-white dark:bg-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            itemScope
            itemType="https://schema.org/WPFooter"
        >
            <meta itemProp="name" content="Website Footer" />
            <meta itemProp="description" content="Connect with Yaseen through social media and contact information" />
            
            <motion.div
                className="max-w-7xl mx-auto px-6"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="border-t-2 border-gray-200 dark:border-gray-700 w-full"></div>
            </motion.div>

            <div className="max-w-7xl mx-auto px-6 py-12">
                <motion.div
                    className="flex flex-col items-center gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring" }}
                        itemScope
                        itemType="https://schema.org/Organization"
                    >
                        <Link
                            href="/"
                            className="flex items-center justify-center"
                            aria-label="Home"
                            itemProp="url"
                        >
                            <Image
                                src="/logo.png"
                                alt="Yaseen.Dev - Web & Game Developer"
                                width={140}
                                height={20}
                                className="py-1 dark:hidden"
                                itemProp="logo"
                            />
                            <Image
                                src="/logo-dark.png"
                                alt="Yaseen.Dev - Web & Game Developer"
                                width={140}
                                height={20}
                                className="py-1 hidden dark:block"
                                itemProp="logo"
                            />
                        </Link>
                    </motion.div>

                    <motion.div
                        className="flex gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        itemProp="contactPoint"
                        itemScope
                        itemType="https://schema.org/ContactPoint"
                    >
                        {renderSocialMediaLinks()}
                    </motion.div>

                    <motion.div
                        className="text-center text-sm text-gray-500 dark:text-gray-400"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        itemProp="copyrightHolder"
                        itemType="https://schema.org/Person"
                    >
                        <p itemProp="name">
                            &copy; {new Date().getFullYear()} Mohamed Yaseen.
                            All rights reserved.
                        </p>
                        <motion.p
                            className="mt-1 flex items-center justify-center gap-1"
                            variants={heartBeatVariants}
                            animate="pulse"
                            itemProp="description"
                        >
                            Built with <FaHeart className="text-red-500" />{" "}
                            using <span itemProp="knowsAbout">Next.js</span> and <span itemProp="knowsAbout">Tailwind CSS</span>
                        </motion.p>
                    </motion.div>
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;