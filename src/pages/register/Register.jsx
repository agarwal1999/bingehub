import { useRef } from "react";
import { useState } from "react"
import "./register.scss"
import { Link } from "react-router-dom";

const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = ()=>{
    setEmail(emailRef.current.value)
  }
  const handleFinish = ()=>{
    setPassword(passwordRef.current.value);
  }
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <h2 className="logo">BingeHub</h2>
          <Link to="/login" className="loginButton link">Sign In</Link>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movie, TV Shows, and more.</h1>
        <h2>Watch anywhere. Cancel Anytime</h2>
        <p>
          Ready to watch? Enter you email address to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email Address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>Get Started</button>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>Start</button>
          </form>
        )}
      </div>
    </div>
  )
}

export default Register
