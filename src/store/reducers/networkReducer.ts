import { networksAction, networksActionTypes, networksState } from "../../types/networks"

const initialState: networksState = {
  networks: [],
  loading: false,
  error: null
}

export const networkReducer = (state = initialState, action: networksAction): networksState => {
  switch (action.type) {
    case networksActionTypes.FETCH_NETWORKS:
      return {loading: true, error: null, networks: []}
    case networksActionTypes.FETCH_NETWORKS_SUCCESS:
      return {loading: false, error: null, networks: action.payload}
    case networksActionTypes.FETCH_NETWORKS_ERROR:
      return {loading: false, error: action.payload, networks: []}
    default:
      return state
  }
}