import type { BlogPost, Note } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "starting-with-modern-web-development",
    title: "Starting with Modern Web Development",
    summary:
      "A quick guide to tooling, patterns, and learning resources for anyone starting modern web development.",
    publishedAt: "2026-03-16",
    tags: ["web", "javascript", "nextjs"],
    content: `## Getting Started\n\nModern web development moves fast. Start by learning:\n\n- **HTML, CSS, and JavaScript** fundamentals\n- **Git** for version control\n- A modern framework like **Next.js** or **React**\n\n### Recommended workflow\n\n1. Set up a project with TypeScript.\n2. Build small components and iterate.\n3. Read the docs and build along with tutorials.\n\nHappy coding!`,
  },
  {
    slug: "teaching-computer-engineering",
    title: "Teaching Computer Engineering Effectively",
    summary:
      "Tips from my experience teaching at Horizon Gautam Buddha Secondary and New Horizon College.",
    publishedAt: "2025-11-05",
    tags: ["teaching", "education"],
    content: `## Build a practice-first classroom\n\nWhen students can build something meaningful, they learn faster. Start each lesson with a challenge:\n\n- Present a real problem\n- Work through a guided solution\n- Let students explore alternate approaches\n\n### Keep feedback cycles short\n\nUse quick quizzes, in-class coding, and peer review to ensure understanding.`,
  },
];

export const notes: Note[] = [
  {
    id: "git-commit-messages",
    title: "Writing Better Git Commit Messages",
    excerpt:
      "A few simple rules to make your git history easier to read and debug.",
    updatedAt: "2026-02-10",
    tags: ["git", "workflow"],
    content: `### Keep it short and descriptive\n\n- Start with a concise summary (max 50 chars)\n- Use present tense ("Fix bug" not "Fixed bug")\n\n### Add details when needed\n\nIf the change is non-trivial, add a body with motivation and impact.`,
  },
  {
    id: "study-plan-for-cs-students",
    title: "A Simple Study Plan for CS Students",
    excerpt:
      "A weekly plan to balance theory, projects, and reading as a CS student.",
    updatedAt: "2026-01-22",
    tags: ["learning", "plan"],
    content: `- **Monday/Wednesday:** Review lecture notes and practice problems\n- **Tuesday/Thursday:** Work on a small project or coding challenge\n- **Friday:** Read an article or documentation for 30 minutes\n- **Weekend:** Reflect, refactor, and plan next week`,
  },
];

export function getAllPosts() {
  return blogPosts;
}

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllNotes() {
  return notes;
}

export function getNoteById(id: string) {
  return notes.find((note) => note.id === id);
}
