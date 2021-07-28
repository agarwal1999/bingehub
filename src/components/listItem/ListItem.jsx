import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import { useState } from "react"
import "./listItem.scss"
import { Link } from "react-router-dom"

const ListItem = ({index, title, date, info, image, age_limit}) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://vod-progressive.akamaized.net/exp=1627381988~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4286%2F14%2F371433846%2F1541905617.mp4~hmac=77690bd0ea5ce4840c1d2dc17556641ddff686d43430157e654433e48ce0c165/vimeo-prod-skyfire-std-us/01/4286/14/371433846/1541905617.mp4?filename=video.mp4";

  return (
    <div
      className="listItem"
      style={{left : isHovered && index * 227.5 - 50}}
      onMouseEnter={()=>setIsHovered(true)}
      onMouseLeave={()=>setIsHovered(false)}
    >
      <img
        src={"https://image.tmdb.org/t/p/w500"+image}
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
              <h4>{title}</h4>
              <div className="itemInfoTop">
                <span>1 hour 14 mins</span>
                <span className="limit">{age_limit===false ? "+16" : "+18"}</span>
                <span>{date.substr(0,4)}</span>
              </div>
              <div className="desc">
                {info.substr(0,100)+"."}
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
