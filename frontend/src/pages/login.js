import React, { useState } from "react"
// ? https://www.npmjs.com/package/react-pro-sidebar
import { ProSidebarProvider } from "react-pro-sidebar"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import SideBar from "../components/sideBar"
import "../css/login.css"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <> 
      <ProSidebarProvider>
        <div className="pageWrapper">
          
        
          {/* Sidebar */}
          <SideBar/>
            <div className="Auth-form-container">
              <form className="Auth-form">
                <div className="Auth-form-content">
                  <h3 className="Auth-form-title">Sign in</h3>
                  <div className="form-group mt-3">
                    <label>Email address</label>
                    <input
                    type="email"
                    className="form-control mt-1"
                    placeholder="Enter email">
                    </input>

                  </div>

                  

                </div>

              </form>

            </div>

        
             

        </div>
        

                

              
      </ProSidebarProvider>
    </>   
  );
}