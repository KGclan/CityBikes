export interface stationState {
  station: any[]
  station_loading: boolean
  station_error: string | null
}

export enum stationActionTypes {
  FETCH_STATION = "FETCH_STATION",
  FETCH_STATION_SUCCESS = "FETCH_STATION_SUCCESS",
  FETCH_STATION_ERROR = "FETCH_STATION_ERROR"
}

interface fetchStationAction {
  type: stationActionTypes.FETCH_STATION
}

interface fetchStationSuccessAction {
  type: stationActionTypes.FETCH_STATION_SUCCESS
  payload: any[]
}

interface fetchStationErrorAction {
  type: stationActionTypes.FETCH_STATION_ERROR
  payload: string
}

export type stationAction = fetchStationAction | fetchStationSuccessAction | fetchStationErrorAction
