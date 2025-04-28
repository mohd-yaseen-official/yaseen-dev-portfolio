import { cn } from "@/lib/utils";

const DotBackground = () => {
    return (
        <>
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:20px_20px]",
                    "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
                    "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
                    "pointer-events-none"
                )}
                aria-hidden="true"
            />
            <div
                className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-gray-900"
                aria-hidden="true"
            ></div>
        </>
    );
};

export default DotBackground;
