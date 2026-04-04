import certificationsData from "@/data/certifications.json";
import educationData from "@/data/education.json";
import experienceData from "@/data/experience.json";
import projectsData from "@/data/projects.json";
import siteDataFile from "@/data/site.json";
import skillsData from "@/data/skills.json";
import { Certification, Project, SiteData, SkillCategory, TimelineItem } from "@/app/lib/types";

export const siteData = siteDataFile as SiteData;
export const experience = experienceData as TimelineItem[];
export const education = educationData as TimelineItem[];
export const skills = skillsData as SkillCategory[];
export const certifications = certificationsData as Certification[];
export const projects = projectsData as Project[];
