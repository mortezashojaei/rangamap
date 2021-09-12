import React from "react";
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
  stateValues: [
    { state: "Tehran", value: 20 },
    { state: "Hamedan", value: 60 },
    { state: "Ilam", value: 100 },
    { state: "Karaj", value: 180 },
  ],
  setStateValues: () => {},
  stateColors: [
    {
      state: "Tehran",
      color: "blue",
    },
  ],
  minimumStateValue: 0,
};

export const mapContext =
  React.createContext<MapContextType>(contextDefaultValue);
