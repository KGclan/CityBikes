import { stationAction, stationActionTypes, stationState } from "../../types/station"

const initialState: stationState = {
  station: [],
  station_loading: false,
  station_error: null
}

export const stationReducer = (state = initialState, action: stationAction): stationState => {
  switch (action.type) {
    case stationActionTypes.FETCH_STATION:
      return {station_loading: true, station_error: null, station: []}
    case stationActionTypes.FETCH_STATION_SUCCESS:
      return {station_loading: false, station_error: null, station: action.payload}
    case stationActionTypes.FETCH_STATION_ERROR:
      return {station_loading: false, station_error: action.payload, station: []}
    default:
      return state
  }
}