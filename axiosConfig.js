import axios from "axios";


export const featuredSkillsConfig = axios.create({
    baseURL: "https://mohamed-yaseen.info/api/v1/skills/?is_featured=true",
});

export const timelineConfig = axios.create({
    baseURL: "https://mohamed-yaseen.info/api/v1/timeline",
});

export const skillTypesConfig = axios.create({
    baseURL: "https://mohamed-yaseen.info/api/v1/skills/types",
});

export const skillsConfig = axios.create({
    baseURL: "https://mohamed-yaseen.info/api/v1/skills/?is_listed=true",
});

export const featuredProjectsConfig = axios.create({
    baseURL:
        "https://mohamed-yaseen.info/api/v1/portfolio/?category=project&is_featured=true",
});

export const featuredClonesConfig = axios.create({
    baseURL:
        "https://mohamed-yaseen.info/api/v1/portfolio/?category=clone&is_featured=true",
});

export const projectsConfig = axios.create({
    baseURL: "https://mohamed-yaseen.info/api/v1/portfolio/?category=project",
});

export const clonesConfig = axios.create({
    baseURL: "https://mohamed-yaseen.info/api/v1/portfolio/?category=clone",
});

export const contactConfig = axios.create({
    baseURL: "https://mohamed-yaseen.info/api/v1/contact",
});

export const socialLinksConfig = axios.create({
    baseURL: "https://mohamed-yaseen.info/api/v1/contact/social",
});

