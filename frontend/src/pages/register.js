import SideBar from "../components/sideBar"
import "../css/login.css"
import React, { useState, useContext } from "react"
import { ProSidebarProvider } from "react-pro-sidebar"
import AuthContext from "../context/AuthContext"

function Register() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const { registerUser } = useContext(AuthContext)

    const handleSubmit = async e => {
        e.preventDefault()
        registerUser(username, password, password2)
    }

    return(
        <> 
          <ProSidebarProvider>
            <div className="pageWrapper__login">
                
              
        
              {/* Sidebar */}
              <SideBar/>
                <div className="login">
                  <form className="Auth-form" onSubmit={handleSubmit}>
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
                          placeholder="e.g John Doe"
                          id="username"
                          onChange={e => setUsername(e.target.value)}
                          required
                          />
                      </div>
                     
                      <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                          type="password"
                          id="password"
                          className="form-control mt-1"
                          placeholder="Password"
                          onChange={e => setPassword(e.target.value)}
                          required
                        />
                        <div className="form-group mt-3">
                        <label>Confirm Password</label>
                        <input
                          type="password"
                          id="confirm-password"
                          className="form-control mt-1"
                          placeholder="Confirm Password"
                          onChange={e => setPassword2(e.target.value)}
                          required
                        />
                      </div>
                      <p>{password !== password2 ? "Passwords don't match " : ""}</p>
                      <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                          Register
                        </button>
                      </div>
                    </div>
                    </div>
                  </form>
                </div>
            </div>  
          </ProSidebarProvider>
      </>
      )
}