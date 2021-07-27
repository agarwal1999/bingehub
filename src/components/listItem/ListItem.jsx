import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import { useState } from "react"
import "./listItem.scss"
import { Link } from "react-router-dom"

const ListItem = ({index}) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://vod-progressive.akamaized.net/exp=1627381988~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4286%2F14%2F371433846%2F1541905617.mp4~hmac=77690bd0ea5ce4840c1d2dc17556641ddff686d43430157e654433e48ce0c165/vimeo-prod-skyfire-std-us/01/4286/14/371433846/1541905617.mp4?filename=video.mp4";

  return (
    <div
     className="listItem"
     style={{left : isHovered && index * 227.5 - 50}}
     onMouseEnter={()=>setIsHovered(true)} 
     onMouseLeave={()=>setIsHovered(false)}>
      <img
        src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
        alt=""
      />
      {isHovered && (
        <Link to="/watch" className="link">
          <>
            <video src={trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownAltOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>1 hour 14 mins</span>
                <span className="limit">+16</span>
                <span>1999</span>
              </div>
              <div className="desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati dolore autem voluptates 
                debitis odit.
              </div>
              <div className="genre">Action</div>
            </div>
          </>
        </Link>
      )}
    </div>
  )
}

export default ListItem
