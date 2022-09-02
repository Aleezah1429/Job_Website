import React, { useContext,useEffect, useState } from "react";
import { Col, Row, Toast } from "react-bootstrap";
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
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [pass,setPass] = useState("")

// For Error Message
const [msg, setMsg] = useState("");
const [variant, setvariant] = useState("");


  // For SnackBar
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


const save=(data)=>{
  console.log(data)
  setMsg(data.message)
  setvariant(data.variant)
  setOpen(true)
  setName("")
  setEmail("")
  setPass("")


}


  const Submit=()=>{
    console.log(name,email,pass)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name,email,pass })
  };
  fetch(process.env.REACT_APP_BASE_URL+'/CreateUser', requestOptions)
  .then(response => response.json())
      .then(data => save(data));

  }



  return (
    <>
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={variant} sx={{ width: '100%' }}>
          {msg}
        </Alert>
      </Snackbar>
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Full Name" onChange={(e)=>setName(e.target.value)} />
        <Input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        <Input type="password" placeholder="Password" onChange={(e)=>setPass(e.target.value)} />
        <Input type="password" placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />

      <SubmitButton onClick={()=>Submit()} type="submit">Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>


    
    </>
  );
}