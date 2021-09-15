import { FC } from "react";
import { useMapState } from "../../hooks";
import { RegionColorsModel, RegionType } from "../../models";

type Props = {
  className?: string;
  regionColors?: RegionColorsModel;
  regions: Array<RegionType>;
};

export const Map: FC<Props> = ({ className = "", regions }) => {
  const { regionColors, pdfRef } = useMapState();
  return (
    <div ref={pdfRef}>
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
      >
        <g>
          {regions.map((region) => (
            <path
              key={region.name}
              fill={
                regionColors.find((item) => item.name === region.name)?.color ||
                "#7F7C82"
              }
              className={`region ${region.name}`}
              d={region.path}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};
