export const isNotLastOnList = (index: number, listLength: number) => {
  return index < listLength - 1;
};

export const getSuggestionConfig = () => ({
  service: {
    title: "text-primary-800 text-sm font-bold",
    bg: "bg-primary-50 lg:pl-4 md:w-[50%] ",
  },
  home: {
    title: "text-xs text-white font-light",
    bg: "bg-primary-600 lg:pl-0",
  },
});

export const getTopSectionConfig = () => ({
  service: {
    title: "text-primary-800 ",
    bg: "bg-neutral-100 md:w-[50%]  ",
    little: "text-secondary-500",
  },
  home: {
    title: "text-neutral-50 lg:w-3/6",
    bg: "bg-primary-600",
    little: "text-neutral-100 ",
  },
});
