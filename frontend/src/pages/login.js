import React, { useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import "../index.css"
import SideBar from "../components/sideBar"
import styled from "styled-components"
// ? https://www.npmjs.com/package/react-pro-sidebar
import { ProSidebarProvider } from "react-pro-sidebar"

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
    display: flex;
    flex-direction: row;
    justify-items:center;
    height: 100vh;
    width:100%;
  `
  const LoginFormWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  `
  return (
    <> 
      <ProSidebarProvider>
        <PageWrapper>
          <div className="Login">
        
            <SideBar/>
            <Form onSubmit={handleSubmit}>

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

            </Form>
          </div>
        </PageWrapper>
      </ProSidebarProvider>
    </>   
  );
}