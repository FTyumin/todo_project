import React, { useState } from "react"
// ? https://www.npmjs.com/package/react-pro-sidebar
import { ProSidebarProvider } from "react-pro-sidebar"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import SideBar from "../components/sideBar"
import styled from "styled-components"
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

  const PageWrapper = styled.div`
    height: 100vh;
    width: 100%;
  `

  return (
    <> 
      <ProSidebarProvider>
        <PageWrapper>
          <div>
        
            <SideBar/>
            <Form onSubmit={handleSubmit} className="loginForm">
              <div>
                <Form.Group size="lg" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    autoFocus
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Button  size="lg" type="submit" disabled={!validateForm()}>
                  Login
                </Button>
              </div>
            </Form>
          </div>
        </PageWrapper>
      </ProSidebarProvider>
    </>   
  );
}