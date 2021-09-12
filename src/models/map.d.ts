export type MapDataPeriodModel = {
  id: number;
  color: string;
  max: number;
};

export type StateColorsModel = Array<{ state: string; color: string }>;

export type StateValuesModel = Array<{ state: string; value: number }>;

export type IranStateType = {
  name: string;
  persianName: string;
  path: string;
};
