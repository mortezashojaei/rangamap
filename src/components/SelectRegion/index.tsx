import { FC } from "react";
import { SupportedRegionType } from "../../models";
import { Regions } from "../../regions";
import { StyledSelect } from "./styled";

type Props = {
  onChange: (value: SupportedRegionType) => void;
};

export const SelectRegion: FC<Props> = ({ onChange }) => {
  function handlChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = Regions.find(({ id }) => id === e.target.value);
    if (value) onChange(value);
  }
  return (
    <StyledSelect onChange={handlChange}>
      {Regions.map((item) => (
        <option value={item.id}>{item.persionName}</option>
      ))}
    </StyledSelect>
  );
};
