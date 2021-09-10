import axios from "axios"
import { Dispatch } from "redux"
import { networksAction, networksActionTypes } from "../../types/networks"

export const fetchNetworks = () => {
  return async (dispatch: Dispatch<networksAction>) => {
    try {
      dispatch({ type: networksActionTypes.FETCH_NETWORKS })
      const response = await axios.get("https://api.citybik.es/v2/networks?fields=id,company")
      dispatch({ type:  networksActionTypes.FETCH_NETWORKS_SUCCESS, payload: response.data.networks })
    } catch (error) {
      dispatch({ 
        type: networksActionTypes.FETCH_NETWORKS_ERROR,
        payload: "Ошибка при загрузке сетей" 
      })
    }
  }
}