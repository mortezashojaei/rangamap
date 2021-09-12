import { FC, useRef, useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

import { contextDefaultValue } from ".";
import {
  MapDataPeriodModel,
  StateColorsModel,
  StateValuesModel,
} from "../../models";

import { mapContext } from "./context";
import { Dialogues } from "../../Dialogues";

export const MapProvider: FC = ({ children }) => {
  const [periods, setPeriods] = useState<MapDataPeriodModel[]>(
    contextDefaultValue.periods
  );

  const [stateValues, setStateValues] = useState<StateValuesModel>(
    contextDefaultValue.stateValues
  );

  const minimumStateValue = Math.min.apply(
    null,
    stateValues.map((item) => item.value)
  );

  const stateColors: StateColorsModel = stateValues.map(({ state, value }) => ({
    color:
      periods.find(
        (period, index) =>
          period.max > value &&
          value >= (index ? periods[index - 1].max : minimumStateValue)
      )?.color || "",
    state,
  }));

  const pdfRef = useRef<HTMLDivElement>();

  const exportPdf = () => {
    const pdfComponent = pdfRef.current;
    if (pdfComponent)
      html2canvas(pdfComponent).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        pdf.addImage(imgData, "JPEG", 15, 40, 180, 160);
        pdf.save(`${Dialogues.PROJECT_NAME}.pdf`);
      });
  };

  const contextValue = {
    pdfRef,
    periods,
    setPeriods,
    stateValues,
    setStateValues,
    stateColors,
    minimumStateValue,
    exportPdf,
  };

  return (
    <mapContext.Provider value={contextValue}>{children}</mapContext.Provider>
  );
};
