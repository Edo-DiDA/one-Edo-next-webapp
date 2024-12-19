import Breadcrumbs from "@/components/contents/breadcrumbs";
import {
  getArticlesFromSlug,
  getHtmlContent,
} from "@/lib/functions/get-service";
import Footer from "@/components/component/footer";
import PageHighlight from "@/components/contents/page-highlight";
import AudienceInfo from "@/components/contents/audience-info";
import {
  transformArticleToHighlight,
  transformContributorsToHighlight,
} from "@/lib/functions";
import SerivcesTopSection from "@/components/contents/service-top-section";

type ArticlesPageProps = {
  params: Promise<{ article: string }>;
};
export const revalidate = 3;

const ServicesPage = async ({ params }: ArticlesPageProps) => {
  const slug = await params;
  const data = await getArticlesFromSlug(slug.article);
  const article = await getHtmlContent(data?.content);
  const references = await getHtmlContent(data?.outline);
  const whoisthisfor = await getHtmlContent(data?.whoisthisfor);

  return (
    <>
      {data?.breadcrumbs?.length > 0 && (
        <Breadcrumbs items={data.breadcrumbs} />
      )}
      <div className="lg:flex lg:w-full">
        <SerivcesTopSection title={data.title} body={data.description || ""} />
        <AudienceInfo content={whoisthisfor} />
      </div>

      <div className="px-4 py-10 lg:px-[240px] md:py-10 md:px-10 lg:flex lg:flex-row  lg:w-full lg:max-w-full md:max-w-[633px]">
        <div className="lg:w-full">
          <div className="md:py-0 md:pb-6 md:px-0 border-b border-neutral-200">
            <p className="text-md text-primary-800 font-bold pb-3">
              On this page
            </p>
            <article
              className="rendered"
              dangerouslySetInnerHTML={{ __html: references }}
            />
          </div>
          <div className="pt-6">
            <article
              className="prose rendered prose-h4:px-4"
              dangerouslySetInnerHTML={{ __html: article }}
            />
          </div>
        </div>
        <div className="">
          {data?.relatedpages && (
            <PageHighlight
              useExternalLinks
              items={transformArticleToHighlight(data?.relatedpages)}
              title="Related Articles"
            />
          )}
          {data?.contributors && (
            <PageHighlight
              useExternalLinks
              items={transformContributorsToHighlight(data?.contributors)}
              title="Contributors"
              background="primary-50"
            />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServicesPage;
