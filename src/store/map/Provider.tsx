import { FC, useRef, useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

import { contextDefaultValue } from ".";
import {
  MapDataPeriodModel,
  RegionColorsModel,
  RegionValuesModel,
  SupportedRegionType,
} from "../../models";

import { mapContext } from "./context";
import { Dialogues } from "../../Dialogues";
import { Regions } from "../../regions";

export const MapProvider: FC = ({ children }) => {
  const [periods, setPeriods] = useState<MapDataPeriodModel[]>(
    contextDefaultValue.periods
  );

  const [values, setValues] = useState<RegionValuesModel>(
    contextDefaultValue.values
  );

  const [regions, setRegions] = useState<SupportedRegionType>(
    contextDefaultValue.regions
  );

  const minimumStateValue = Math.min.apply(
    null,
    values.map((item) => item.value)
  );

  const regionColors: RegionColorsModel = values.map(({ name, value }) => ({
    color:
      periods.find(
        (period, index) =>
          period.max > value &&
          value >= (index ? periods[index - 1].max : minimumStateValue)
      )?.color || "",
    name,
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
    values,
    setValues,
    regionColors,
    minimumStateValue,
    exportPdf,
    regions,
    setRegions,
  };

  return (
    <mapContext.Provider value={contextValue}>{children}</mapContext.Provider>
  );
};
