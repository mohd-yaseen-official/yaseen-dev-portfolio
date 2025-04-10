import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaTwitter,
    FaInstagram,
    FaHeart
} from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900">
            {/* Top decorative line */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="border-t-2 border-gray-200 dark:border-gray-700 w-full"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-col items-center gap-8">
                    {/* Logo - matching your header */}
                    <Link href="/" className="flex items-center justify-center">
                        <Image
                            src="/logo.png"
                            alt="Yaseen.Dev Logo"
                            width={140}
                            height={20}
                            className="py-1 dark:hidden"
                        />
                        <Image
                            src="/logo-dark.png"
                            alt="Yaseen.Dev Logo"
                            width={140}
                            height={20}
                            className="py-1 hidden dark:block"
                        />
                    </Link>

                    {/* Social links with your brand blue color */}
                    <div className="flex gap-6 text-2xl">
                        <a
                            href="https://github.com/Fusion-boy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-[#2476E1] dark:text-gray-400 dark:hover:text-[#2476E1] transition-colors"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://linkedin.com/in/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-[#2476E1] dark:text-gray-400 dark:hover:text-[#2476E1] transition-colors"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="mailto:youremail@example.com"
                            className="text-gray-600 hover:text-[#2476E1] dark:text-gray-400 dark:hover:text-[#2476E1] transition-colors"
                            aria-label="Email"
                        >
                            <FaEnvelope />
                        </a>
                        <a
                            href="https://twitter.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-[#2476E1] dark:text-gray-400 dark:hover:text-[#2476E1] transition-colors"
                            aria-label="Twitter"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="https://instagram.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-[#2476E1] dark:text-gray-400 dark:hover:text-[#2476E1] transition-colors"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>
                    </div>

                    {/* Copyright with subtle text */}
                    <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                        <p>&copy; {new Date().getFullYear()} Mohamed Yaseen. All rights reserved.</p>
                        <p className="mt-1 flex items-center justify-center gap-1">
                            Built with <FaHeart className="text-red-500" /> using Next.js and Tailwind CSS
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;