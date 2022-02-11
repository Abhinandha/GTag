import React, { useState, useEffect } from "react";
import ReactGA from 'react-ga';
ReactGA.initialize({gtmId :'G-8HJQ8QHMT1'})


function Login() {

  useEffect(()=>{
    ReactGA.pageview(window.location.pathname + window.location.search);
  })
  
  const [uname, setUname] = useState("");
  
  const [password, setPassword] = useState("");
  const [method, setMethod] = useState("");
  
  const [items, setItems] = useState([]);
  const [passworderror, setPasswordError] = useState("");
  const [userError, setUserError] = useState("");
  const [methoderror, setMethodError] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    if (uname && password && method) {
      let user = {
        firstname: uname,
        Passwords: password,
        method: method,
      };
      let userD = Object.assign([], items);
      userD.push(user);
      setItems(userD);
      setUname("");
      setPassword("");
      setMethod("");
    } else {
      if (!uname) {
        setUserError("Enter Name");
      }
      if (!password) {
        setPasswordError("Enter Password");
      }
      if (!method) {
        setMethodError("Select Method");
      }
    }
  }
  return (
    <div className="body">
      <div className="home">
      {(uname && password && method !=="")?(
    <h2>Welcome <span>{method}</span></h2>
  ):(
   
        <div className="form">
          <span>
            <label className="title">USERNAME</label>
            <br />
            <input
              type="text"
              placeholder="Enter Username"
              onChange={(e) => {
                setUname(e.target.value);
              }}
              value={uname}
            />
            <p className="text-danger">{!uname ? userError : ""}</p>
          </span>
          <br />

          <span>
            <label className="title">PASSWORD</label>
            <br />
            <input
              type="text"
              placeholder="Enter Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
            <p className="text-danger">{!password ? passworderror : ""}</p>
          </span>
          <br />
          <span>
            <label className="title">METHOD</label>
            <br />
            <select
              value={method}
              onChange={(e) => {
                setMethod(e.target.value);
              }}
            >
              <option value="">Select method</option>
              <option value="AMEND">AMEND</option>
              <option value="CREATE">CREATE</option>
              <option value="CANCEL">CANCEL</option>
            </select>
            <p className="text-danger">{!method ? methoderror : ""}</p>
          </span>
          <br />

          <button onClick={onSubmit} >LOGIN</button>
        </div>
          )}
      </div>
    </div>
  );
}
export default Login;
