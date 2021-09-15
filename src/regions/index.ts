import { SupportedRegionType } from "../models";
import { IranStates } from "./IranStates";
import { TehranRegions } from "./TehranRegions";

export const Regions: SupportedRegionType[] = [
  {
    id: "IRAN_STATES",
    persionName: "استان های ایران",
    region: IranStates,
  },
  {
    id: "TEHRAN_REGIONS",
    persionName: "مناطق 22 گانه تهران",
    region: TehranRegions,
  },
];
