import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/includes/Header";
import Footer from "@/components/includes/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    display: 'swap',
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    display: 'swap',
});

export const metadata = {
    title: {
        default: "Mohamed Yaseen | Full Stack & Game Developer",
        template: "%s | Mohamed Yaseen"
    },
    description: "Professional portfolio of Mohamed Yaseen V M - Certified Full Stack Developer and Unity Game Developer creating modern web applications and interactive experiences.",
    keywords: [
        "Full Stack Developer",
        "Game Developer",
        "React Developer",
        "Next.js Developer",
        "Unity Developer",
        "Web Developer",
        "Portfolio",
        "Mohamed Yaseen",
        "JavaScript Developer",
        "Node.js Developer"
    ],
    authors: [{ 
        name: "Mohamed Yaseen V M", 
        url: "https://mohamed-yaseen.info" 
    }],
    metadataBase: new URL('https://mohamed-yaseen.info'),
    openGraph: {
        title: "Mohamed Yaseen | Full Stack & Game Developer",
        description: "Professional portfolio of Mohamed Yaseen V M - Certified Full Stack Developer and Unity Game Developer",
        url: "https://mohamed-yaseen.info",
        siteName: "Mohamed Yaseen Portfolio",
        images: [
            {
                url: "/og_image.png",
                width: 1200,
                height: 630,
                alt: "Mohamed Yaseen Portfolio Preview",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        ],
        apple: [
            { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
        ],
        other: [
            {
                rel: "icon",
                url: "/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png"
            },
            {
                rel: "icon",
                url: "/android-chrome-512x512.png",
                sizes: "512x512",
                type: "image/png"
            },
        ]
    },
    manifest: "/site.webmanifest",
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#111827" },
    ],
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning className="scroll-smooth">
            <head>
                
                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Mohamed Yaseen V M",
                        "url": "https://mohamed-yaseen.info",
                        "sameAs": [
                            "https://github.com/mohd-yaseen-official",
                            "https://www.instagram.com/_mxd__yaseen_"
                        ],
                        "jobTitle": "Full Stack & Game Developer",
                        "description": "Certified Full Stack Developer and Unity Game Developer creating modern web applications and interactive experiences.",
                        "knowsAbout": [
                            "React",
                            "Next.js",
                            "JavaScript",
                            "TypeScript",
                            "Node.js",
                            "Unity",
                            "Game Development",
                            "Web Development"
                        ]
                    })}
                </script>
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 transition-colors duration-300`}
            >
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}