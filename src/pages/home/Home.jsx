import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";

const Home = ({type}) => {
  return (
    <div className="home">
      <Navbar/>
      <Featured type={type}/>
      <List type={"Continue to Watch"} number={1} />
      <List type={"Trending"}  number={2} />
      <List type={"Editors' Picks"}  number={3} />
      <List type={"Critically Acclaimed"}  number={4} />
    </div>
  )
}

export default Home
