import { ArrowBackOutlined } from "@material-ui/icons"
import { Link } from "react-router-dom"
import "./watch.scss"

const Watch = () => {
  return (
    <div className="watch">
      <Link to="/" className="link">
        <div className="back">
          <ArrowBackOutlined/>
          Home
        </div>
      </Link>
      <video className="video" src="https://vod-progressive.akamaized.net/exp=1627381988~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4286%2F14%2F371433846%2F1541905617.mp4~hmac=77690bd0ea5ce4840c1d2dc17556641ddff686d43430157e654433e48ce0c165/vimeo-prod-skyfire-std-us/01/4286/14/371433846/1541905617.mp4?filename=video.mp4" autoPlay progress controls loop></video>
    </div>
  )
}

export default Watch
