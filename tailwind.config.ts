import type { Config } from "tailwindcss";
import safelist from "./tailwind-safelist.json";

const config: Config = {
    darkMode: "class", // Enable dark mode with the 'class' strategy
    content: [
        "./src/**/*.{js,ts,jsx,tsx}", // Add your paths here to watch files
    ],
    safelist,
    theme: {
        extend: {}, // Your custom theme extensions go here
    },
    plugins: [],
};

export default config;
