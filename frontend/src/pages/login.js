import React, { useState } from "react"
// ? https://www.npmjs.com/package/react-pro-sidebar
import { ProSidebarProvider } from "react-pro-sidebar"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import SideBar from "../components/sideBar"
import "../css/login.css"

export default function Login() {
  //  const [email, setEmail] = useState("");
  //  const [password, setPassword] = useState("");

  //  function validateForm() {
  //    return email.length > 0 && password.length > 0;
  //  }

  //  function handleSubmit(event) {
  //    event.preventDefault();
  //  }

  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if(authMode ==="signin"){

    
    return (
      <> 
        <ProSidebarProvider>
          <div className="pageWrapper">
            
          
    
            {/* Sidebar */}
            <SideBar/>
              <div className="login">
                <form className="Auth-form">
                  <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign in</h3>
                    <div className="text-center">
                      Not registered? {""}
                      <span className="link-primary" onClick={changeAuthMode}>
                        Sign Up
                      </span>
                    </div>
                    <div className="form-group mt-3">
                      <label>Email address</label>
                      <input
                        type="email"
                        className="form-control mt-1"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Enter password"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>

                    <p className="forgot-password text-center mt-2">
                      Forgot <a href="#">password?</a>
                    </p>

                  </div>
                </form>
              </div>
          </div>
        

                

              
        </ProSidebarProvider>
      </>   
    )
  }
  return(
    <div className="login">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}