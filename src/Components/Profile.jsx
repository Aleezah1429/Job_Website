import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { MdWork,MdLocationPin,MdAccessTimeFilled,MdPaid } from 'react-icons/md'
import ProfileImage from "../Assests/profile.png"
import "../App.css"
import {Container,Row,Col,Form,Button} from "react-bootstrap"
import {Link,useHistory } from "react-router-dom"

export default function Profile(props) {
  const history = useHistory();
  const [user,setUser] = React.useState({name:"anonymous",email:"anonymous123@gmail.com"})

  React.useEffect(()=>{
            if(JSON.parse(localStorage.getItem("USER"))){
                setUser(JSON.parse(localStorage.getItem("USER")))
            }
  },[])




  return (
    <Container  style={{marginBottom:"10%",marginTop:"10%",width:"100%",}}>
      <Row  style={{paddingLeft:"15px",marginBottom:"10%"}}>
          <img style={{width:"250px",height:"170px"}} src={ProfileImage}/>
      </Row>
      <Row  >
         <bold > Name: </bold> 
         <p style={{color:"#ff9902"}}>Wajahat Ahmed </p>
      </Row>
      <Row>
      <bold> Email: </bold> <p style={{color:"#ff9902"}}> wajahatahmed049@gmail.com </p>
      </Row>
    </Container>
  );
}