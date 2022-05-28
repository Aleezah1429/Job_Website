import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

import { Col, Row, Toast } from "react-bootstrap";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);


  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  // For Error Message
  const [msg, setMsg] = useState("");
  const [variant, setvariant] = useState("");


  // For Toast
  const [show, setShow] = useState(false);

const save=(data)=>{
  setMsg(data.message)
  setvariant(data.variant)


}

  const Submit = () => {
    console.log(email, pass)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, pass })
    };
    setShow(true)
    fetch('http://localhost:8001/Login', requestOptions)
      .then(response => response.json())
      .then(data =>save(data) );

  }


  return (
    <>
      <BoxContainer>
        <FormContainer>
          <Input type="email" placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)} />
          <Input type="password" placeholder="Password" name="pass" onChange={(e) => setPass(e.target.value)} />
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        
          <Toast bg={variant}  onClose={() => setShow(false)} show={show} delay={2500} autohide>
            <Toast.Body style={{fontSize:"14px",color:"white"}}>{msg}</Toast.Body>
          </Toast>
      
        <MutedLink href="#">Forget your password?</MutedLink>
        <Marginer direction="vertical" margin="1.6em" />
        <SubmitButton type="submit" onClick={() => Submit()}>Signin</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        
        <MutedLink href="#">
          Don't have an accoun?{" "}
          <BoldLink href="#" onClick={switchToSignup}>
            Signup
          </BoldLink>
        </MutedLink>
      </BoxContainer>




      
    </>
  );
}