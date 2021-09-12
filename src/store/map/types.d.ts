import { Dispatch, SetStateAction } from "react";
import {
  MapDataPeriodModel,
  StateColorsModel,
  StateValuesModel,
} from "../../models";

export type MapContextType = {
  periods: MapDataPeriodModel[];
  setPeriods: Dispatch<SetStateAction<MapDataPeriodModel[]>>;
  stateValues: StateValuesModel;
  setStateValues: Dispatch<SetStateAction<StateValuesModel>>;
  stateColors: StateColorsModel;
  minimumStateValue: number;
  pdfRef?: any;
  exportPdf?: () => void;
};
