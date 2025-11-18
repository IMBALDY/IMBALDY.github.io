import { PersonalInfo } from "./types";

export const personalInfo: PersonalInfo = {
  name: "Chen Jiajun",
  title: "Research Intern @ NUS CVML Lab | Seeking PhD Opportunities",
  email: "chenjiajun@u.nus.edu",
  github: "https://github.com/IMBALDY",
  orcid: "https://orcid.org/0009-0009-7541-4025",
  scholar: "",
  bluesky: "https://bsky.app/profile/chenjiajun.bsky.social",
  openreview: "https://openreview.net/profile?id=~Jiajun_Chen10",
  bio: "I am a research intern at the Computer Vision and Machine Learning (CVML) Lab at National University of Singapore, working under the supervision of Prof. Angela Yao and Dr. Junbin Xiao (Postdoctoral Research Fellow). My research interests lie in video understanding, long-term memory, and world models. I am actively seeking PhD opportunities to further explore these areas and contribute to advancing artificial intelligence through innovative approaches to temporal reasoning and visual learning.",
  cvmlLabUrl: "https://cvml.comp.nus.edu.sg/",
  
  education: [
    {
      title: "Research Intern",
      organization: "CVML (Computer Vision & Machine Learning) Lab, National University of Singapore",
      period: "2025 - Present",
      location: "Singapore",
      description: "Working under the supervision of Prof. Angela Yao and Dr. Junbin Xiao (Postdoctoral Research Fellow) on video understanding, long-term memory, and world models. Conducting research on temporal reasoning and visual learning in computer vision systems.",
    },
    {
      title: "Non-Graduating Non-Exchanging Programme (NGNE)",
      organization: "National University of Singapore",
      period: "July 2025 - Present",
      location: "Singapore",
      description: "Participating in research activities at the School of Computing as a non-graduating exchange student.",
    },
    {
      title: "SOC Summer Workshop 2023",
      organization: "National University of Singapore",
      period: "May 2023 - Aug 2023",
      location: "Singapore",
      description: "Performance grade: A-",
    },
    {
      title: "Bachelor of Engineering in Data Science and Big Data Technology",
      organization: "Beijing University of Posts and Telecommunications",
      period: "Sept 2022 - Jun 2026",
      location: "Beijing, China",
      description: "Undergraduate student at School of Computer Science, focusing on data science, machine learning, and big data technologies.",
    },
  ],
  
  experience: [],
  
  publications: [
    {
      title: "MuKV: Multi-Grained KV Cache Compression for Long Streaming Video Question Answering",
      authors: "Junbin Xiao*, Jiajun Chen*, Tianxiang Sun, Xun Yang, Angela Yao",
      venue: "Computer Vision and Pattern Recognition (CVPR)",
      year: "2025",
      status: "submitted",
      note: "Co-first author",
      highlight: "CCF-A Conference",
    },
    {
      title: "PROMISE: Prompt-Attentive Hierarchical Contrastive Learning for Robust Cross-Modal Representation with Missing Modalities",
      authors: "Jiajun Chen*, Sai Cheng, Yutao Yuan, Yirui Zhang, Haitao Yuan, Peng Peng, Yi Zhong",
      venue: "Association for the Advancement of Artificial Intelligence (AAAI)",
      year: "2025",
      status: "accepted",
      note: "First author",
      highlight: "CCF-A Conference",
      pdf: "https://arxiv.org/abs/2511.10997",
    },
  ],
};

// Giscus configuration for comments
export const giscusConfig = {
  repo: process.env.NEXT_PUBLIC_GISCUS_REPO || "",
  repoId: process.env.NEXT_PUBLIC_GISCUS_REPO_ID || "",
  category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || "",
  categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || "",
  mapping: "pathname" as const,
  strict: "0" as const,
  reactionsEnabled: "1" as const,
  emitMetadata: "0" as const,
  inputPosition: "top" as const,
  lang: "en" as const,
  loading: "lazy" as const,
};

