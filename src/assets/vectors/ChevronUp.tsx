import { SVGProps } from "@/app/_common/types/svg";

const ChevronUp: React.FC<SVGProps> = ({
  height = "20",
  fill = "#FAFAFA",
  width = "20",
}) => {
  return (
    <svg
      width={height}
      height={width}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.59335 7.02546C9.8274 6.82485 10.1728 6.82485 10.4068 7.02546L16.2402 12.0255C16.5022 12.2501 16.5326 12.6447 16.308 12.9067C16.0833 13.1688 15.6888 13.1992 15.4267 12.9745L10.0001 8.32317L4.5735 12.9745C4.31143 13.1992 3.91686 13.1688 3.69222 12.9067C3.46759 12.6447 3.49794 12.2501 3.76001 12.0255L9.59335 7.02546Z"
        fill={fill}
      />
    </svg>
  );
};

export default ChevronUp;
