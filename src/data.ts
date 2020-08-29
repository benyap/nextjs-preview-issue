export const TOKEN_MAPPING: Record<string, string> = {
  token1: "user1",
  token2: "user2",
};

export interface Page {
  id: string;
  slug: string;
  title: string;
  status: "published" | "draft";
}

export const PAGES: Page[] = [
  {
    id: "about",
    slug: "/about",
    title: "About Us",
    status: "published",
  },
  {
    id: "contact",
    slug: "/contact",
    title: "Contact Us",
    status: "published",
  },
  {
    id: "wip",
    slug: "/workinprogress",
    title: "Work In Progress",
    status: "draft",
  },
  {
    id: "draft",
    slug: "/draft",
    title: "Draft Page",
    status: "draft",
  },
];
