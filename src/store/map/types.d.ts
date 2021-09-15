import { Dispatch, SetStateAction } from "react";
import {
  MapDataPeriodModel,
  RegionColorsModel,
  RegionType,
  SupportedRegionType,
  RegionValuesModel,
} from "../../models";

export type MapContextType = {
  periods: MapDataPeriodModel[];
  setPeriods: Dispatch<SetStateAction<MapDataPeriodModel[]>>;
  values: RegionValuesModel;
  setValues: Dispatch<SetStateAction<RegionValuesModel>>;
  regionColors: RegionColorsModel;
  minimumStateValue: number;
  pdfRef?: any;
  exportPdf?: () => void;
  regions: SupportedRegionType;
  setRegions: Dispatch<SetStateAction<SupportedRegionType>>;
};
