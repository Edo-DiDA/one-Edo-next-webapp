import { SuggestionInfo } from "@/types/content";

type SuggestionsProp = {
  title?: string;
  showTitle?: boolean;
  suggestions: SuggestionInfo[];
};

const Suggestions = ({
  suggestions,
  showTitle = true,
  title = "Popular suggestions",
}: SuggestionsProp) => {
  return (
    <div className="min-h-[160px] p-4 bg-primary-800">
      {showTitle && (
        <h6 className="text-xs mb-3 text-white font-light">{title}</h6>
      )}
      <div className="flex flex-row flex-wrap -mr-3">
        {suggestions.map(({ name, action }, index) => (
          <button
            key={index}
            onClick={action}
            className="h-[40px] rounded bg-primary-700 px-3 text-neutral-50 mr-3 mb-3"
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
