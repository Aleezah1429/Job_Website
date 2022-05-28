import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { MdWork,MdLocationPin,MdAccessTimeFilled,MdPaid } from 'react-icons/md'

import "../App.css"
import {Container,Row,Col,Form,Button} from "react-bootstrap"
import {Link,useHistory } from "react-router-dom"

export default function JobCard(props) {
  const history = useHistory();


const GoToJob=()=>{
  localStorage.setItem("JOB",JSON.stringify({jobTitle:props.jobTitle,companyDescription:props.companyDescription,
    companyLogo:props.companyLogo,companyName:props.companyName,companyWebsite:props.companyWebsite,jobCategory:props.jobCategory,
    jobDescription:props.jobDescription,jobRequirements:props.jobRequirements,jobSalary:props.jobSalary,
    jobVacancies:props.jobVacancies,companyLocation:props.companyLocation,jobLocation:props.jobLocation,jobType:props.jobType,
    jobTimings:props.jobTimings
  }))
  window.location.replace("/Job")
}


  return (
    <Container className="JobCard">
      <Row>
          <Col >
          <Row>
              <h3>{props.jobTitle}</h3>
          </Row>
          <Row >
          <Col xs={2} sm={1}  className="JobCardIcon"> <MdLocationPin/></Col>
              <Col>{props.jobLocation}</Col>
              
          </Row>
          <Row>
              <Col  xs={2} sm={1} className="JobCardIcon"><MdWork/></Col>
              <Col>{props.jobType}</Col>
               
          </Row>
          <Row>
          <Col  xs={2} sm={1} className="JobCardIcon"><MdAccessTimeFilled/></Col>
              <Col>{props.jobTimings}</Col>
               
          </Row>
          <Row>
          <Col  xs={2} sm={1} className="JobCardIcon"><MdPaid/></Col>
              <Col>{props.jobSalary}</Col>
               
          </Row>
          </Col>
          
          <Col className="btnCol">
    
  <Button className='Job-time-card-btn' variant="flat">
  {props.jobTimings}
  </Button>   
  <br />
  {/* <Link to="/Job"> */}
  <Button onClick={()=>GoToJob()}  className='Job-card-btn' variant="flat">
    Apply
  </Button>
  {/* </Link> */}
          </Col>
      </Row>
    </Container>
  );
}