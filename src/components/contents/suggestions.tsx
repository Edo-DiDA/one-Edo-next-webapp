import { SuggestionInfo } from "@/types/content";

type SuggestionsProp = {
  title?: string;
  suggestions: SuggestionInfo[];
};

const Suggestions = ({
  title = "Popular suggestions",
  suggestions,
}: SuggestionsProp) => {
  return (
    <div className="min-h-[160px] p-4 bg-primary-800">
      <h6 className="text-xs text-white font-light">{title}</h6>
      <div className="flex flex-row mt-3 flex-wrap -mr-3">
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
