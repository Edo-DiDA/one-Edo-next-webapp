export type SuggestionInfo = {
  name: string;
  action?: () => void;
};

export type RefernceInfo = {
  title: string;
  body?: string;
  link?: string;
};

// APIs

export type PageContent = "home" | "service";

type PageType = {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  shortDescription?: string;
  description?: string | null;
};

export type SubmenuType = {
  __component: string;
  id: number;
  page?: PageType;
  article?: {
    id: number;
    documentId: string;
    title: string;
    description?: string | null;
    slug: string;
  };
};

export type BreadcrumbType = {
  id: number;
  page: PageType;
};

export type PopularSuggestionType = {
  id: number;
  title: string;
  page: {
    id: number;
    documentId: string;
    title: string;
    slug: string;
  };
};

export type ContentType = {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  icon: string;
  featured: boolean;
  shortDescription?: string | null;
  submenus: SubmenuType[];
  breadcrumbs: BreadcrumbType[];
  popularsuggestion: PopularSuggestionType[];
};
