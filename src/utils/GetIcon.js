import dynamic from "next/dynamic";
import { FaCode } from "react-icons/fa";
import GetIconPrefix from "./GetIconPrefix";

export const GetIcon = (iconName) => {
    const prefix = GetIconPrefix(iconName).toLowerCase();

    const libraries = {
        fa: () => import("react-icons/fa"),
        si: () => import("react-icons/si"),
        ai: () => import("react-icons/ai"),
        bs: () => import("react-icons/bs"),
        bi: () => import("react-icons/bi"),
        di: () => import("react-icons/di"),
        fi: () => import("react-icons/fi"),
        fc: () => import("react-icons/fc"),
        gi: () => import("react-icons/gi"),
        go: () => import("react-icons/go"),
        gr: () => import("react-icons/gr"),
        hi: () => import("react-icons/hi"),
        im: () => import("react-icons/im"),
        io: () => import("react-icons/io"),
        io5: () => import("react-icons/io5"),
        md: () => import("react-icons/md"),
        ri: () => import("react-icons/ri"),
        tb: () => import("react-icons/tb"),
        ti: () => import("react-icons/ti"),
        tfi: () => import("react-icons/tfi"),
        vsc: () => import("react-icons/vsc"),
        cg: () => import("react-icons/cg"),
        rx: () => import("react-icons/rx"),
        lu: () => import("react-icons/lu"),
    };

    const loader = libraries[prefix];

    if (!loader) {
        return FaCode;
    }

    return dynamic(
        () =>
            loader()
                .then((mod) => mod[iconName] || FaCode)
                .catch(() => FaCode),
        {
            ssr: false,
        }
    );
};
