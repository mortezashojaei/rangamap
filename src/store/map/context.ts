import React from "react";
import { Regions } from "../../regions";
import { MapContextType } from "./types";

export const contextDefaultValue: MapContextType = {
  periods: [
    {
      id: 0,
      color: "red",
      max: 40,
    },
  ],
  setPeriods: () => {},
  values: [{ name: "Tehran", value: 40 }],
  setValues: () => {},
  regionColors: [
    {
      name: "Tehran",
      color: "blue",
    },
  ],
  regions: Regions[0],
  setRegions: () => {},
  minimumStateValue: 0,
};

export const mapContext =
  React.createContext<MapContextType>(contextDefaultValue);
