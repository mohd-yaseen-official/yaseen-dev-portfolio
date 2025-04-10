"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="fixed top-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="Yaseen.Dev Logo"
                        width={140}
                        height={20}
                        priority
                        className="py-1 dark:hidden"
                    />
                    <Image
                        src="/logo-dark.png"
                        alt="Yaseen.Dev Logo"
                        width={140}
                        height={20}
                        priority
                        className="py-1 hidden dark:block"
                    />
                </Link>

                <nav className="hidden md:flex items-center space-x-8 text-black dark:text-white">
                    <Link
                        href="/#about"
                        className="hover:underline hover:text-[#2476E1]"
                    >
                        About
                    </Link>
                    <Link
                        href="/#journey"
                        className="hover:underline hover:text-[#2476E1]"
                    >
                        Journey
                    </Link>
                    <Link
                        href="/#skills"
                        className="hover:underline hover:text-[#2476E1]"
                    >
                        Skills
                    </Link>
                    <Link
                        href="/#featured-projects"
                        className="hover:underline hover:text-[#2476E1]"
                    >
                        Projects
                    </Link>
                    <Link
                        href="/#featured-clones"
                        className="hover:underline hover:text-[#2476E1]"
                    >
                        Clones
                    </Link>
                    <Link
                        href="/#contact"
                        className="ml-4 px-4 py-2 bg-[#2476E1] text-white rounded hover:bg-blue-700 transition"
                    >
                        Contact Me
                    </Link>
                </nav>

                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-black dark:text-white"
                    >
                        {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 px-6 pb-4 space-y-4 text-black dark:text-white">
                    <Link
                        href="/#about"
                        onClick={toggleMenu}
                        className="block hover:text-[#2476E1]"
                    >
                        About
                    </Link>
                    <Link
                        href="/#projects"
                        onClick={toggleMenu}
                        className="block hover:text-[#2476E1]"
                    >
                        Projects
                    </Link>
                    <Link
                        href="/#journey"
                        onClick={toggleMenu}
                        className="block hover:text-[#2476E1]"
                    >
                        Journey
                    </Link>
                    <Link
                        href="/#skills"
                        onClick={toggleMenu}
                        className="block hover:text-[#2476E1]"
                    >
                        Skills
                    </Link>
                    <Link
                        href="/#featured-clones"
                        onClick={toggleMenu}
                        className="block hover:text-[#2476E1]"
                    >
                        Clones
                    </Link>
                    <Link
                        href="/#contact"
                        onClick={toggleMenu}
                        className="block bg-[#2476E1] text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Contact Me
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Header;
