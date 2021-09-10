import React, { FC, useState } from "react"

interface StationProps{
  id: string
  name: string
}

const Station: FC<StationProps> = ({ id, name }) => {

  const [likes, setLike] = useState(localStorage.getItem(id))
  let style = "station-list__item"

  function like(item_id: string){
    if(localStorage.getItem(item_id))
    {
      localStorage.removeItem(item_id)
      setLike(localStorage.getItem(id))
      console.log(style)
    } 
    else 
    {
      localStorage.setItem(item_id, "like it")
      setLike(localStorage.getItem(id))
    }
  }

  // Добавляем стиль если станция понравилась
  localStorage.getItem(id) ? style += " station-list__item_active" : style=style

  return(
    <div className={style}>
      { name }
      <button className="item__like" onClick={ () => like(id) } >
        <img src="./assets/icons/like.png" alt="" />
      </button>
    </div>
  )

}

export default Station