import { FC } from "react";
import { AwsomeButton } from "..";
import { Dialogues } from "../../Dialogues";
import { useMapState } from "../../hooks";
import { Regions } from "../../regions";
import { DataPeriodsInput } from "../DataPeriodsInput";
import { RegionValuesInput } from "../RegionValuesInput";
import { SelectRegion } from "../SelectRegion";
import { Container, Heading } from "./styled";

type Props = {
  className?: string;
};

export const SideBar: FC<Props> = ({ className = "" }) => {
  const {
    periods,
    setPeriods,
    values,
    setValues,
    minimumStateValue,
    exportPdf,
    regions,
    setRegions,
  } = useMapState();
  return (
    <Container className={className}>
      <Heading>{Dialogues.PROJECT_NAME}</Heading>

      <SelectRegion onChange={setRegions} />

      <DataPeriodsInput
        periods={periods}
        onChange={setPeriods}
        min={minimumStateValue}
      />
      <RegionValuesInput
        regionValues={values}
        setRegionValues={setValues}
        regions={regions.region}
      />
      <AwsomeButton
        onClick={() => {
          if (exportPdf) exportPdf();
        }}
      >
        {Dialogues.DOWNLOAD_EXPORT}
      </AwsomeButton>
    </Container>
  );
};
