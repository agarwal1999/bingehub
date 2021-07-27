
import { Link } from "react-router-dom"
import "./login.scss"

const Login = () => {

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <h2 className="logo">BingeHub</h2>
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or Phone Number" />
          <input type="password" placeholder="Password" />
          <button className="loginButton">Sign In</button>
          <span>New To BingeHub? <Link to="/register" className="link"><b>Sign Up Now.</b></Link> </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a 
            bot. <b>Learn more</b>
          </small>
        </form>
      </div>
    </div>
  )
}

export default Login
