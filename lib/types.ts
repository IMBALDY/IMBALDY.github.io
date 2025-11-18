export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  tags?: string[];
  author?: string;
}

export interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  location?: string;
  description?: string;
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  status: "published" | "accepted" | "submitted" | "preprint";
  note?: string;
  pdf?: string;
  code?: string;
  highlight?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  github: string;
  orcid: string;
  scholar: string;
  bluesky: string;
  openreview?: string;
  bio: string;
  cvmlLabUrl?: string;
  education: TimelineItem[];
  experience: TimelineItem[];
  publications: Publication[];
}

