import "./app.scss"
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/movies">
          <Home type="movie"/>
        </Route>
        <Route exact path="/series">
          <Home type= "series"/>
        </Route>
        <Route exact path="/watch">
          <Watch/>
        </Route>
        <Route exact path="/register">
          <Register/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;