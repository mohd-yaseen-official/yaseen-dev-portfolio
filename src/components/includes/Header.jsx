"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.style.overflow = isOpen ? "auto" : "hidden";
    };

    const navLinks = [
        {
            href: "/#about",
            label: "About",
            aria: "Learn about Yaseen's background and expertise",
        },
        {
            href: "/#journey",
            label: "Journey",
            aria: "Explore Yaseen's professional journey",
        },
        {
            href: "/#skills",
            label: "Skills",
            aria: "View Yaseen's technical skills and competencies",
        },
        {
            href: "/#featured-projects",
            label: "Projects",
            aria: "See Yaseen's featured development projects",
        },
        {
            href: "/#featured-clones",
            label: "Clones",
            aria: "Check out Yaseen's website clone projects",
        },
        {
            href: "/#contact",
            label: "Contact",
            aria: "Get in touch with Yaseen",
            isCta: true,
        },
    ];

    const headerVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
            },
        },
    };

    const mobileMenuVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.3,
                when: "beforeChildren",
                staggerChildren: 0.1,
            },
        },
        exit: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
                when: "afterChildren",
            },
        },
    };

    const linkVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
    };

    return (
        <motion.header
            className={`fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md ${
                scrolled ? "shadow-sm" : ""
            } transition-all duration-300`}
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            role="banner"
            itemScope
            itemType="https://schema.org/WPHeader"
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    itemProp="publisher"
                    itemScope
                    itemType="https://schema.org/Organization"
                >
                    <Link
                        href="/"
                        className="flex items-center"
                        aria-label="Yaseen Dev - Home"
                        itemProp="url"
                    >
                        <span className="sr-only" itemProp="name">
                            Yaseen Dev
                        </span>
                        {mounted && (
                            <>
                                <Image
                                    src="/logo-dark.png"
                                    alt="Yaseen Dev - Web Developer & Designer"
                                    width={140}
                                    height={40}
                                    priority
                                    className="dark:block hidden"
                                    itemProp="logo"
                                />
                                <Image
                                    src="/logo.png"
                                    alt="Yaseen Dev - Web Developer & Designer"
                                    width={140}
                                    height={40}
                                    priority
                                    className="dark:hidden"
                                    itemProp="logo"
                                />
                            </>
                        )}
                    </Link>
                </motion.div>

                {/* Desktop Navigation */}
                <nav
                    className="hidden md:flex items-center gap-6 lg:gap-8"
                    aria-label="Main navigation"
                    role="navigation"
                    itemScope
                    itemType="https://schema.org/SiteNavigationElement"
                >
                    {navLinks.slice(0, -1).map((link) => (
                        <motion.div
                            key={link.label}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            itemProp="name"
                        >
                            <Link
                                href={link.href}
                                className="text-gray-800 dark:text-gray-200 hover:text-[#2476E1] dark:hover:text-[#2476E1] transition-colors text-sm sm:text-base relative group"
                                aria-label={link.aria}
                                itemProp="url"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2476E1] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </Link>
                        </motion.div>
                    ))}

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        itemProp="name"
                    >
                        <Link
                            href={navLinks[navLinks.length - 1].href}
                            className="px-4 py-2 bg-[#2476E1] text-white rounded-lg hover:bg-blue-700 transition text-sm sm:text-base"
                            aria-label={navLinks[navLinks.length - 1].aria}
                            itemProp="url"
                        >
                            {navLinks[navLinks.length - 1].label}
                        </Link>
                    </motion.div>
                </nav>

                {/* Mobile Navigation Toggle */}
                <div className="md:hidden flex items-center">
                    <motion.button
                        onClick={toggleMenu}
                        className="text-gray-800 dark:text-gray-200 p-1"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                    >
                        {isOpen ? (
                            <HiX size={26} className="text-[#2476E1]" />
                        ) : (
                            <HiMenu size={26} />
                        )}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id="mobile-menu"
                        className="md:hidden bg-white dark:bg-gray-900 px-6 pb-4 overflow-hidden"
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        style={{ overflow: "hidden" }}
                        role="navigation"
                        aria-label="Mobile navigation"
                    >
                        <div className="space-y-4">
                            {navLinks.map((link) => (
                                <motion.div
                                    key={link.label}
                                    variants={linkVariants}
                                    itemProp="name"
                                >
                                    <Link
                                        href={link.href}
                                        onClick={toggleMenu}
                                        className={`block hover:text-[#2476E1] py-2 text-lg ${
                                            link.isCta
                                                ? "bg-[#2476E1] text-white px-4 py-2 rounded hover:bg-blue-700 text-center"
                                                : ""
                                        }`}
                                        aria-label={link.aria}
                                        itemProp="url"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
