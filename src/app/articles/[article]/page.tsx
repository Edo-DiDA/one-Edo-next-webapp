import Breadcrumbs from "@/components/contents/breadcrumbs";
import TopSection from "@/components/contents/top-section";
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
      <div className="max-w-5xl  mx-auto">
        {data?.breadcrumbs?.length > 0 && (
          <Breadcrumbs items={data.breadcrumbs} />
        )}
      </div>
      <div className="md:flex ">
        <TopSection title={data.title} body={data.description || ""} />
        <AudienceInfo content={whoisthisfor} />
      </div>

      <div className="md:flex md:gap-6 md:py-20 lg:pl-20 xl:pl-0 max-w-5xl  mx-auto">
        <div className="md:w-[50%]">
          <div className="py-6 px-4 border-b border-neutral-200">
            <p className="text-md text-primary-800 font-bold pb-3">
              On this page
            </p>
            <article
              className="rendered"
              dangerouslySetInnerHTML={{ __html: references }}
            />
          </div>
          <div className="p-4">
            <article
              className="prose rendered prose-h4:px-4"
              dangerouslySetInnerHTML={{ __html: article }}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-col-reverse justify-end">
          {data?.contributors && (
            <PageHighlight
              useExternalLinks
              items={transformContributorsToHighlight(data?.contributors)}
              title="Contributors"
              background="primary-50"
            />
          )}
          {data?.relatedpages && (
            <PageHighlight
              useExternalLinks
              items={transformArticleToHighlight(data?.relatedpages)}
              title="Related Articles"
            />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServicesPage;
