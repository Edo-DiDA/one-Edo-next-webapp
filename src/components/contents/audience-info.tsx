type AudienceInfoProps = {
  content: string;
};

const AudienceInfo = ({ content }: AudienceInfoProps) => {
  return content ? (
    <div className="h-auto py-6 bg-primary-50 px-4 md:w-[50%] ">
      <h5 className="text-md font-bold text-primary-800 mb-3">
        Who is this for?
      </h5>
      <article
        className="rendered"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  ) : null;
};

export default AudienceInfo;
