import React, { useEffect, useState } from "react";
import "../login/Login.css";
import pic from "../../components/images/giphy.gif";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  // const [validFormData, setValidFormData] = useState();
  const [ validNavigate, setValidNavigate] = useState(false);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handelChange = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  // useEffect(() => {
  //   axios.post("http://localhost:3001/ownerlogin",login).then((res) => {
  //     console.log("111111111111111111")
  //     debugger;
  //     console.log(res)
  //     setUserData(res.data);
  //     if (res.status === 200) {
  //       setValidNavigate(true);
  //       navigate("/ownerhome", { state: { userData }});
  //     } else {
  //       // console.log(responce.data);
  //     }
  //   })
  // }, [validFormData])

  useEffect(() => {
    console.log("for navigate")
    if(validNavigate == true){
      navigate("/ownerhome", { state: { userData }});
    } else {
      console.log("loading......")
    }
  }, [validNavigate])

  const handelClick = async function (e) {
    try {
      console.log("--------------------------");
      e.preventDefault();
      if (!login.email || !login.password) {
        alert("Please fill the Details");
      } else {
        const responce = await axios.post(
          "http://localhost:3001/ownerlogin",
          login
          );
          setUserData(responce);
          console.log("logged in");
          console.log(responce);
          if (responce.status === 200) {
            setValidNavigate(true);
        } else {
          console.log(responce.data);
        }
      }
    } catch (error) {
      console.log(error);
      alert("Unable to login");
    }
  };

  return (
    <div className="fullbody">
      <div className="blank"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-7">
            <div class="card LoginPic">
              <div class="card-body">
                <img src={pic} class="img-size" alt="..." />
              </div>
            </div>
          </div>
          <div className="col-sm-5">
            <div class="card p-5">
              <br></br>
              <div class="mb-3">
                <label for="formGroupusername" class="form-label">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={login.email}
                  onChange={handelChange}
                  class="form-control shadow-none"
                  id="formGroupusername"
                  placeholder="Enter your Email"
                  required="required"
                />
              </div>
              <div class="mb-3">
                <label for="formGrouppassword" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={login.password}
                  onChange={handelChange}
                  class="form-control shadow-none"
                  id="formGroupExamplepassword"
                  placeholder="Enter your password"
                />
              </div>

              <button
                type="submit"
                class="btn btn-success "
                onClick={handelClick}
              >
                Login
              </button>

              <div className="noAccount mt-5">
                <h6>
                  Don't have your Account
                  <Link to="/ownerregister"> Register Here</Link>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
