import React, { useEffect, useState } from "react"
import { FC } from "react"
import { Spinner } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { fetchNetworks } from "../store/action-creators/network"
import StationList from "./StationList"

const NetworksList: FC = () => {

  const { networks, error, loading } = useTypedSelector(state => state.network)
  const dispatch = useDispatch()
  const [id, setId] = useState("velobike-moscow");

  useEffect(() => {
    dispatch(fetchNetworks())
  }, []);

  if (loading) {
    return  <section className="networks-list">
              <Spinner animation="border" variant="warning" />
            </section>
  }
  
  if(error) {
    return <h1>{ error }</h1>
  }

  return(
    <section className="networks-list">
      <h1 className="networks-list__h01">Выбранная сеть: {id}</h1>
      {
        networks.map(network => 
            <a href="#station-list" onClick={ () => setId(network.id) } className="networks-list__btn" key={ network.id }>{ network.id }</a>
          )
      }
      <StationList id={id} />
    </section>
  )
}

export default NetworksList