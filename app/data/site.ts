import site from "./site.json";

export interface NavLink {
  id: string;
  label: string;
}

export interface ExperienceItem {
  company: string;
  position: string;
  period: string[];
  current: boolean;
  summary?: string;
  highlights: string[];
}

export interface ProjectItem {
  name: string;
  description: string;
  href: string;
}

export interface SkillDiscipline {
  name: string;
  slots: string[];
}

export interface SiteData {
  meta: { name: string; role: string };
  nav: { links: { id: string; label: string }[] };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    intro: string;
    emailCta: string;
    linkedinLabel: string;
  };
  experience: {
    title: string;
    annotation: string;
    items: ExperienceItem[];
  };
  projects: {
    title: string;
    annotation: string;
    items: ProjectItem[];
    linkLabel: string;
  };
  skills: {
    title: string;
    annotation: string;
    disciplines: SkillDiscipline[];
  };
  contact: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    email: string;
    linkedin: string;
    linkedinLabel: string;
  };
  footer: { copyright: string; statusLabel: string };
}

const data = site as unknown as SiteData;

export const contactLinks = {
  email: data.contact.email,
  linkedin: data.contact.linkedin,
};

export function projectLinkLabel() {
  return data.projects.linkLabel;
}

export default data;
