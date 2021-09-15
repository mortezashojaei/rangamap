export type MapDataPeriodModel = {
  id: number;
  color: string;
  max: number;
};

export type RegionColorsModel = Array<{ name: string; color: string }>;

export type RegionValuesModel = Array<{ name: string; value: number }>;

export type RegionType = {
  name: string;
  persianName: string;
  path: string;
};

export type SupportedRegionType = {
  id: string;
  region: RegionType[];
  persionName: string;
};
