import React, { useState } from "react"

import Form from "react-bootstrap/Form"

import Button from "react-bootstrap/Button"

import "../index.css"

import SideBar from "./sideBar"
import styled from "styled-components"

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
  height: 100vh;
`

const LoginFormWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`


  return (
    
      
      
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

          <Button block size="lg" type="submit" disabled={!validateForm()}>

            Login

          </Button>

        </Form>
        

      </div>
      
   
     
    

    

  );

}