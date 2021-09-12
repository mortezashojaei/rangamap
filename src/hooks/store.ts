import { useContext } from "react";
import { mapContext } from "../store";
import { MapContextType } from "../store/map/types";

export const useMapState = (): MapContextType => {
  const context: MapContextType = useContext<MapContextType>(mapContext);
  return context;
};
