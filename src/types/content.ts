export type SuggestionInfo = {
  name: string;
  action?: () => void;
};

export type RefernceInfo = {
  title: string;
  body?: string;
  link?: string;
};

export type HighlightItem = {
  id?: string;
  title: string;
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

export type ArticleInfo = {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  title: string;
  shortDescription?: string;
  description?: string | null;
};

export type SubmenuType = {
  __component: string;
  id: number;
  page?: PageType;
  article?: ArticleInfo;
};

export type BreadcrumbType = {
  id: number;
  page: PageType;
};

export type RelatedPages = {
  id: number;
  article: ArticleInfo;
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

export type ArticleType = {
  id: number;
  documentId: string;
  title: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  featured: boolean;
  content: string;
  outline: string;
  whoisthisfor: string;
  breadcrumbs: BreadcrumbType[];
  relatedpages: RelatedPages[];
};
