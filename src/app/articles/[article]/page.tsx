import parse from "html-react-parser";

import Breadcrumbs from "@/components/contents/breadcrumbs";
import TopSection from "@/components/contents/top-section";
import {
  getArticlesFromSlug,
  getHtmlContent,
} from "@/lib/functions/get-service";

type ArticlesPageProps = {
  params: Promise<{ article: string }>;
};
export const revalidate = 3;

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

      <div className="p-4">
        {/* <article
          className="prose prose-h4:px-4"
          dangerouslySetInnerHTML={{ __html: article }}
        /> */}
        {parse(article, {
          replace(node) {
            if (node.type === "tag" && node.name === "h4") {
              return <h4 className="text-primary-500">TTT</h4>;
            }
          },
        })}
        {/* <div className="prose mx-auto my-8 prose-h1:text-primary-400">
          <h1>Test Title</h1>
          <p>This paragraph should be styled with Tailwind prose.</p>
          <a href="#">This is a link.</a>
        </div> */}
      </div>
    </>
  );
};

export default ServicesPage;
