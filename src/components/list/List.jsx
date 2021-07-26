import {ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons"
import { useState } from "react"
import { useRef } from "react"
import ListItem from "../listItem/ListItem"
import "./list.scss"

const List = () => {

  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef();

  const handleClickFunction = (direction)=>{
    let distance = listRef.current.getBoundingClientRect().x-50;
    if(direction==="left" && slideNumber > 0){
      listRef.current.style.transform = `translateX(${230 + distance}px)`
      setSlideNumber(slideNumber-1);
    }
    if(direction==="right" && slideNumber<5){
      listRef.current.style.transform = `translateX(${-230 + distance}px)`
      setSlideNumber(slideNumber+1);
    }
  }

  return (
    <div className="list">
      <span className="listTitle">Continue To Watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined className="sliderArrow left" onClick={()=>handleClickFunction("left")} />
        <div className="container" ref={listRef} >
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />
        </div>
        <ArrowForwardIosOutlined className="sliderArrow right" onClick={()=>handleClickFunction("right")} />
      </div>
    </div>
  )
}

export default List
