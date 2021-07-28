import {ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons"
import { useEffect, useState } from "react"
import { useRef } from "react"
import ListItem from "../listItem/ListItem"
import "./list.scss"
import axios from "axios";

const List = ({type, number}) => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [movieData, setMovieData] = useState('');

  useEffect(()=>{
    fetchData();
  },[]);  

  const fetchData = ()=>{
    axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=07cf1cdd760e761bafa4263ecc326500&language=en-US&page=${number}`)
    .then(response=>setMovieData(response.data.results))
    .catch(err=>console.log(err))
  }

  const listRef = useRef();

  const handleClickFunction = (direction)=>{
    let distance = listRef.current.getBoundingClientRect().x-50;
    if(direction==="left" && slideNumber > 0){
      listRef.current.style.transform = `translateX(${230 + distance}px)`
      setSlideNumber(slideNumber-1);
    }
    if(direction==="right" && slideNumber<15){
      listRef.current.style.transform = `translateX(${-230 + distance}px)`
      setSlideNumber(slideNumber+1);
    }
  }

  return (
    <div className="list">
      <span className="listTitle">{type}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined className="sliderArrow left" onClick={()=>handleClickFunction("left")} />
        <div className="container" ref={listRef} >
          {movieData.length > 0 && movieData.map((movie, i)=>(
            <ListItem 
              index={i} 
              title={movie.original_title} 
              date={movie.release_date} 
              info={movie.overview}
              image={movie.poster_path}
              age_limit={movie.adult}
            />
          ))}
        </div>
        <ArrowForwardIosOutlined className="sliderArrow right" onClick={()=>handleClickFunction("right")} />
      </div>
    </div>
  )
}

export default List
