import React, { useEffect } from "react"
import { FC } from "react"
import { Spinner } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { fetchStation } from "../store/action-creators/station"
import Station from "./Station"

interface stationProps{
  id: String
}

const StationList: FC<stationProps> = ({ id }) => {

  const { station, station_error, station_loading } = useTypedSelector(state => state.station)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchStation(id))
  }, [id]);

  if (station_loading) {
    return  <section className="station-list" id="station-list">
              <Spinner animation="border" variant="warning" />
            </section>
  }
  
  if(station_error) {
    return <section className="station-list" id="station-list">{ station_error }</section>
  }

  return(
    <section className="station-list" id="station-list">
      <h1 className="station-list__h1">Кол-во станций: { station.length }</h1>
      {
        station.map(stat => 
            <Station id={stat.id} name={stat.name} key={ stat.id } />
          )
      }
    </section>
  )
}

export default StationList