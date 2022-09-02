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
import {connect} from "react-redux"
import { changeisuser } from '../../Store/action';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);


  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

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
  setMsg(data.message)
  setvariant(data.variant)
  setOpen(true)
  if(data.message == "Successfully Login"){
    setEmail("")
    setPass("")
    setTimeout(()=>{
    props.changeisuser({email,pass})

    },[1000])
    // localStorage.setItem("USER",JSON.stringify({email,pass}))
  }


}

  const Submit = () => {
    console.log(email, pass)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, pass })
    };
    fetch(process.env.REACT_APP_BASE_URL+'/Login', requestOptions)
      .then(response => response.json())
      .then(data =>save(data) );

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
          <Input type="email" placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)} />
          <Input type="password" placeholder="Password" name="pass" onChange={(e) => setPass(e.target.value)} />
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        
      
        <MutedLink href="#">Forget your password?</MutedLink>
        <Marginer direction="vertical" margin="1.6em" />
        <SubmitButton type="submit" onClick={() => Submit()}>Signin</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        
        <MutedLink href="#">
          Don't have an account?{" "}
          <BoldLink href="#" onClick={switchToSignup}>
            Signup
          </BoldLink>
        </MutedLink>
      </BoxContainer>




      
    </>
  );
}

function mapStateToProps(state) {
  return {
      userInfo:state.userInfo
  }
}


function mapDispatchToProps(dispatch) {
  return {
    changeisuser:(userInfo)=>dispatch(changeisuser(userInfo))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)