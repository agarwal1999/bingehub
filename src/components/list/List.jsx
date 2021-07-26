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
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
        </div>
        <ArrowForwardIosOutlined className="sliderArrow right" onClick={()=>handleClickFunction("right")} />
      </div>
    </div>
  )
}

export default List
