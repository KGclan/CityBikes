export interface networksState {
  networks: any[]
  loading: boolean
  error: string | null
}

export enum networksActionTypes {
  FETCH_NETWORKS = "FETCH_NETWORKS",
  FETCH_NETWORKS_SUCCESS = "FETCH_NETWORKS_SUCCESS",
  FETCH_NETWORKS_ERROR = "FETCH_NETWORKS_ERROR"
}

interface fetchNetworksAction {
  type: networksActionTypes.FETCH_NETWORKS
}

interface fetchNetworksSuccessAction {
  type: networksActionTypes.FETCH_NETWORKS_SUCCESS
  payload: any[]
}

interface fetchNetworksErrorAction {
  type: networksActionTypes.FETCH_NETWORKS_ERROR
  payload: string
}

export type networksAction = fetchNetworksAction | fetchNetworksSuccessAction | fetchNetworksErrorAction
