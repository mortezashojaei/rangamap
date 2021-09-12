import { FC } from "react";
import { Dialogues } from "../../Dialogues";
import { useMapState } from "../../hooks";
import { DataPeriodsInput } from "../DataPeriodsInput";
import { StateValuesInput } from "../StateValuesInput";
import { Container, Heading } from "./styled";

type Props = {
  className?: string;
};

export const SideBar: FC<Props> = ({ className = "" }) => {
  const {
    periods,
    setPeriods,
    stateValues,
    setStateValues,
    minimumStateValue,
    exportPdf,
  } = useMapState();
  return (
    <Container className={className}>
      <Heading>{Dialogues.PROJECT_NAME}</Heading>
      <StateValuesInput
        stateValues={stateValues}
        setStateValues={setStateValues}
      />
      <DataPeriodsInput
        periods={periods}
        onChange={setPeriods}
        min={minimumStateValue}
      />
      <div
        onClick={() => {
          if (exportPdf) exportPdf();
        }}
      >
        {Dialogues.DOWNLOAD_EXPORT}
      </div>
    </Container>
  );
};
