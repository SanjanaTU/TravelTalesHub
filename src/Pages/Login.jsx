import React, { useState } from "react";
import "../Pages/Login.css";
import { Link ,useNavigate} from "react-router-dom";
import travel from '../assets/travel_826070.png'
import { useEffect } from "react";
//import { Redirect } from 'react-router-dom';


function FormStructor() {
  const [detail,setDetail]=useState();
  const navigate = useNavigate();
  const login = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/userdetails`);
      if (response.ok) {
        const logindetails = await response.json();
        setDetail(logindetails);
        console.log(logindetails);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    login();
  }, []);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = event => {
    setUsername(event.target.value);
  };

  const handleChange1 = event => {
    setPassword(event.target.value);
  };


   const loginPage =  () => {
    event.preventDefault();
    const userCheck = checkUserName(detail,username);
    const passwordCheck = checkPassword(detail,password);

    if(userCheck && passwordCheck){
      navigate('/HomePage', { replace: true });
    }else{
      alert("Invalid user, Please Sign Up");
    }
    return false;
   };
   const checkUserName =  (array, value) => {
    return array.find((element) => {
      return element.username === value;
    })
    
   }
   const checkPassword =  (array, value) => {
    return array.find((element) => {
      return element.password === value;
    })
  }


  const signUp = async (event) => {
    const values = {
      username,
      password,
      email,
    };
    event.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/userdetails`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-type": "application/json" },
      });
      if (response.ok) {
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        document.getElementById('email').value = '';
        setUsername("");
        setPassword("");
        setEmail("");

        alert("user successfully created please login");
        navigate(`/`);
      }
    } catch (error) {
      console.log(error);
    }
   

   
    return false;
   };


  return (
    <div className="body">
     <img src={travel} alt="login" className="login_img" style={{ position: 'absolute', top: 0, left: 0, height: '50px', width: '50px' }} />
    <div className="traveltaleshub" style={{ color:'blue', position: 'absolute', top: 0, left:50, height: '100px', width: '100px' }}><h1>TravelTalesHub</h1></div>
    <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <form>
            <label className="label" htmlFor="chk" aria-hidden="true">
              Sign up
            </label>
            <input
              className="input"
              id="username"
              style={{ width: "60%" }}
              type="text"
              name="txt"
              placeholder="User name"
              required=""
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="input"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required=""
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="input"
              type="password"
              id="password"
              name="pswd"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}

              required=""
            />
          
              <button
                style={{ cursor: "pointer" }}
                className="button"
                onClick={signUp}
              >
                Sign up
              </button>
           
          </form>
        </div>
        <div className="login">
          <form>
            <label className="label" htmlFor="chk" aria-hidden="true">
              Login
            </label>
            <input
              className="input"
              type="username"
              name="username"
              placeholder="username"
              required=""
              onChange={handleChange}
              value={username}
            />
            <input
              className="input"
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
              onChange={handleChange1}
              value={password}
            />
       
              <button
                style={{ cursor: "pointer" }}
                className="button"
                onClick={loginPage}
              >
                Log in
              </button>
        
          </form>
        </div>
      </div>
    </div>

  );
}

export default FormStructor;