export type NavItem = {
  id: string;
  label: string;
};

export type SocialLink = {
  label: string;
  url: string;
};

export type SeoData = {
  title: string;
  description: string;
  keywords: string[];
};

export type SiteData = {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  navigation: NavItem[];
  socials: SocialLink[];
  seo: SeoData;
};

export type TimelineItem = {
  title: string;
  organization: string;
  duration: string;
  description: string;
};

export type SkillEntry = {
  name: string;
  focus?: string;
};

export type SkillCategory = {
  category: string;
  items: SkillEntry[];
};

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  image?: string;
  credentialUrl?: string;
};

export type Project = {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  githubUrl: string;
  demoUrl: string;
  details: string;
};
