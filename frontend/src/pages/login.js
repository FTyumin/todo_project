import React, { useState } from "react"
// ? https://www.npmjs.com/package/react-pro-sidebar
import { ProSidebarProvider } from "react-pro-sidebar"
import AuthContext from "../context/AuthContext"

import SideBar from "../components/sideBar"
import "../css/login.css"

function  Login() {
  const { loginUser } = useContext(AuthContext);
  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    username.length > 0 && loginUser(username, password);
  };

  

  
  return(
    <> 
      <ProSidebarProvider>
        <div className="pageWrapper__login">
            
          {/* Sidebar */}
          <SideBar/>
            <div className="login" onSubmit={handleSubmit}>
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
                      type="text"
                      className="form-control mt-1"
                      placeholder="e.g Jane Doe"
                      id="username"
                    />
                  </div>
                 
                  <div className="form-group mt-3">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control mt-1"
                      placeholder="Password"
                      id="password"
                    />
                  </div>
                  <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </div>
                 
                </div>
              </form>
            </div>
        </div>  
      </ProSidebarProvider>
  </>
  )
}

export default Login