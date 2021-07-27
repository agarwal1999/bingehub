import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";

const Home = ({type}) => {
  return (
    <div className="home">
      <Navbar/>
      <Featured type={type}/>
      <List type={"Continue to Watch"} />
      <List type={"Bollywood"} />
      <List type={"Editors' Picks"} />
      <List type={"Critically Acclaimed"} />
    </div>
  )
}

export default Home
