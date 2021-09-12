import { FC } from "react";
import { useMapState } from "../../hooks";
import { StateColorsModel } from "../../models";
import { states } from "./states";

type Props = {
  className?: string;
  stateColors?: StateColorsModel;
};

export const Iran: FC<Props> = ({ className = "" }) => {
  const { stateColors, pdfRef } = useMapState();
  return (
    <div ref={pdfRef}>
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
      >
        <g id="Iran">
          {states.map((state) => (
            <path
              key={state.name}
              fill={
                stateColors.find((item) => item.state === state.name)?.color ||
                "#7F7C82"
              }
              className={`state ${state.name}`}
              d={state.path}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};
