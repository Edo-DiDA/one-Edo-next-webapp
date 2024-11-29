const mockList = [
  "People with any skill e.g barbing, tailoring etc.",
  "People of any educational level, as low as Primary 6",
  "People living with disabilities e.g visually impaired, physically challenged",
];

const AudienceInfo = ({}) => {
  return (
    <div className="min-h-[316px] py-6 bg-primary-50 px-4">
      <h5 className="text-md mb-0">Who is this for?</h5>
      <p className="text-sm mt-0 font-light text-primary-800">
        All residents of Edo state can access this service, including:
      </p>
      <ul className="list-disc ml-4">
        {mockList.map((item, index) => (
          <li
            key={index}
            className="text-sm font-light text-primary-800 leading-7"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AudienceInfo;
