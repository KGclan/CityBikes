import { combineReducers } from "redux";
import { networkReducer } from "./networkReducer";
import { stationReducer } from "./stationReducer";

export const rootReducer = combineReducers({
  network: networkReducer,
  station: stationReducer,
})

export type rootState = ReturnType<typeof rootReducer>