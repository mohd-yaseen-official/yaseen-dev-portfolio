import React from "react";
import { motion } from "framer-motion";

const SkeletonCard = () => {
    return (
        <motion.div
            className="h-64 rounded-2xl border animate-pulse 
                    bg-gray-200 dark:bg-gray-700 
                    border-blue-100/50 dark:border-blue-900/30"
            initial={{ opacity: 0.5 }}
            animate={{
                opacity: [0.5, 1, 0.5],
                transition: {
                    duration: 1.5,
                    repeat: Infinity,
                },
            }}
            
        />
    );
};

export default SkeletonCard;
