import Breadcrumbs from "@/components/contents/breadcrumbs";
import TopSection from "@/components/contents/top-section";
import {
  getArticlesFromSlug,
  getHtmlContent,
} from "@/lib/functions/get-service";
import Footer from "@/components/component/footer";
import PageHighlight from "@/components/contents/page-highlight";
import AudienceInfo from "@/components/contents/audience-info";

type ArticlesPageProps = {
  params: Promise<{ article: string }>;
};
export const revalidate = 3;

const pageSections = [
  { title: "Step-by-step guide", link: "#" },
  { title: "Find work based on my degree", link: "#" },
  { title: "Find work based on my skills", link: "#" },
  { title: "Find work for people living with disabilities (PWDs)", link: "#" },
  { title: "Join a community", link: "#" },
  { title: "Contributors", link: "#" },
  { title: "Related articles", link: "#" },
];

const relatedArticles = [
  { title: "Get career advice", link: "#" },
  { title: "Learn a skill", link: "#" },
];

const contributors = [
  {
    title: "Edo Skills Development Agency (Edo Jobs)",
    link: "http://example.com",
  },
];

const ServicesPage = async ({ params }: ArticlesPageProps) => {
  const slug = await params;
  const data = await getArticlesFromSlug(slug.article);
  const article = await getHtmlContent(data?.content);

  return (
    <>
      {data?.breadcrumbs?.length > 0 && (
        <Breadcrumbs items={data.breadcrumbs} />
      )}
      <TopSection title={data.title} body={data.description || ""} />

      <AudienceInfo />

      <PageHighlight items={pageSections} title="On this page" addBullets />

      <div className="p-4">
        <article
          className="prose rendered prose-h4:px-4"
          dangerouslySetInnerHTML={{ __html: article }}
        />
      </div>

      <PageHighlight
        items={contributors}
        title="Contributors"
        background="primary-50"
      />
      <PageHighlight items={relatedArticles} title="Related Articles" />
      <Footer />
    </>
  );
};

export default ServicesPage;
