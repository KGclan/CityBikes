import axios from "axios"
import { Dispatch } from "redux"
import { stationAction, stationActionTypes } from "../../types/station"

export const fetchStation = (id: String) => {
  return async (dispatch: Dispatch<stationAction>) => {
    try {
      dispatch({ type: stationActionTypes.FETCH_STATION })
      const response = await axios.get("https://api.citybik.es/v2/networks/" + id)
      dispatch({ type:  stationActionTypes.FETCH_STATION_SUCCESS , payload: response.data.network.stations })
    } catch (error) {
      dispatch({ 
        type: stationActionTypes.FETCH_STATION_ERROR ,
        payload: "Ошибка при загрузке станций" 
      })
    }
  }
}