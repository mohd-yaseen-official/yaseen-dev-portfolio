"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { FiMail, FiSend, FiUser, FiMessageSquare } from "react-icons/fi";
import { motion } from "framer-motion";
import { GetIcon } from "@/utils/GetIcon";
import { contactConfig, socialLinksConfig } from "../../axiosConfig";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [focused, setFocused] = useState({
        name: false,
        email: false,
        message: false,
    });

    const [socialLinks, setSocialLinks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        socialLinksConfig
            .get("")
            .then((response) => {
                setSocialLinks(response.data.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching social links:", err);
            });
    }, []);

    const renderSocialMediaLinks = () => {
        if (isLoading) {
            return Array(3)
                .fill()
                .map((_, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-4 animate-pulse"
                        aria-hidden="true"
                    >
                        <div className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full">
                            <div className="w-5 h-5"></div>
                        </div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
                    </div>
                ));
        }

        return socialLinks.map((platform) => {
            const Icon = GetIcon(platform.icon);
            return (
                <motion.a
                    key={platform.id}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    aria-label={`Connect with me on ${platform.name}`}
                    itemProp="sameAs"
                >
                    <motion.div
                        className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        aria-hidden="true"
                    >
                        <Icon
                            size={20}
                            className="text-blue-600 dark:text-blue-400"
                        />
                    </motion.div>
                    <span itemProp="name">{platform.username}</span>
                </motion.a>
            );
        });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFocus = (field) => {
        setFocused({ ...focused, [field]: true });
    };

    const handleBlur = (field) => {
        if (!formData[field]) {
            setFocused({ ...focused, [field]: false });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await contactConfig.post("/", formData);
            if (response.status === 200 || response.status === 201) {
                await Swal.fire({
                    icon: "success",
                    title: "Message Sent!",
                    text: "Thanks for reaching out. I'll reply soon!",
                    confirmButtonColor: "#3b82f6",
                    customClass: {
                        popup: "rounded-xl",
                    },
                });
                setFormData({ name: "", email: "", message: "" });
                setFocused({ name: false, email: false, message: false });
            } else {
                throw new Error("Unexpected response");
            }
        } catch (err) {
            await Swal.fire({
                icon: "error",
                title: "Oops!",
                text: "Something went wrong. Please try again later.",
                confirmButtonColor: "#ef4444",
                customClass: {
                    popup: "rounded-xl",
                },
            });
        } finally {
            setLoading(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section
            id="contact"
            className="py-24 px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
            itemScope
            itemType="https://schema.org/ContactPage"
        >
            <meta
                itemProp="name"
                content="Contact Yaseen - Web & Game Developer"
            />
            <meta
                itemProp="description"
                content="Get in touch with Yaseen for web development, game development, or collaboration opportunities"
            />

            <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <motion.div
                    className="text-center mb-16"
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold mb-3 text-gray-800 dark:text-white">
                        Get In Touch
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Have a question or want to work together? Feel free to
                        reach out!
                    </p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-5 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="md:col-span-2 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg dark:shadow-blue-900/10 flex flex-col justify-between"
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        itemScope
                        itemType="https://schema.org/Person"
                    >
                        <div>
                            <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">
                                Contact Information
                            </h2>
                            <motion.div
                                className="space-y-6"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {renderSocialMediaLinks()}
                            </motion.div>
                        </div>

                        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
                            <p className="text-gray-600 dark:text-gray-400">
                                I'll get back to you as soon as possible.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="md:col-span-3 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg dark:shadow-blue-900/10"
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        itemScope
                        itemType="https://schema.org/ContactPoint"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <motion.div
                                className="relative"
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                <div className="absolute left-3 top-3.5 text-gray-400 transition-all duration-300">
                                    <FiUser size={16} />
                                </div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder={
                                        focused.name ? "" : "Your Name"
                                    }
                                    value={formData.name}
                                    onChange={handleChange}
                                    onFocus={() => handleFocus("name")}
                                    onBlur={() => handleBlur("name")}
                                    required
                                    className={`w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 ${
                                        focused.name ? "pt-5 pb-1" : ""
                                    }`}
                                    aria-label="Your Name"
                                    itemProp="name"
                                />
                                {focused.name && (
                                    <label className="absolute text-xs text-blue-500 left-10 top-1.5">
                                        Your Name
                                    </label>
                                )}
                            </motion.div>

                            <motion.div
                                className="relative"
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="absolute left-3 top-3.5 text-gray-400 transition-all duration-300">
                                    <FiMail size={16} />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder={
                                        focused.email ? "" : "Your Email"
                                    }
                                    value={formData.email}
                                    onChange={handleChange}
                                    onFocus={() => handleFocus("email")}
                                    onBlur={() => handleBlur("email")}
                                    required
                                    className={`w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 ${
                                        focused.email ? "pt-5 pb-1" : ""
                                    }`}
                                    aria-label="Your Email"
                                    itemProp="email"
                                />
                                {focused.email && (
                                    <label className="absolute text-xs text-blue-500 left-10 top-1.5">
                                        Your Email
                                    </label>
                                )}
                            </motion.div>

                            <motion.div
                                className="relative"
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <div className="absolute left-3 top-3.5 text-gray-400 transition-all duration-300">
                                    <FiMessageSquare size={16} />
                                </div>
                                <textarea
                                    name="message"
                                    placeholder={
                                        focused.message ? "" : "Your Message"
                                    }
                                    value={formData.message}
                                    onChange={handleChange}
                                    onFocus={() => handleFocus("message")}
                                    onBlur={() => handleBlur("message")}
                                    required
                                    rows="5"
                                    className={`w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 ${
                                        focused.message ? "pt-5 pb-1" : ""
                                    }`}
                                    aria-label="Your Message"
                                    itemProp="description"
                                />
                                {focused.message && (
                                    <label className="absolute text-xs text-blue-500 left-10 top-1.5">
                                        Your Message
                                    </label>
                                )}
                            </motion.div>

                            <motion.button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-blue-600 text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-70"
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow:
                                        "0 10px 25px -5px rgba(36, 118, 225, 0.5)",
                                }}
                                whileTap={{ scale: 0.98 }}
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.3 }}
                                aria-label="Send message"
                            >
                                {loading ? (
                                    <span className="flex items-center gap-2">
                                        <svg
                                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            ></path>
                                        </svg>
                                        Sending...
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-2">
                                        <motion.div whileHover={{ rotate: 15 }}>
                                            <FiSend size={18} />
                                        </motion.div>
                                        Send Message
                                    </span>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Contact;
