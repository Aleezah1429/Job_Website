import * as React from 'react';
import {useEffect,useState} from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { MdWork,MdLocationPin,MdAccessTimeFilled,MdOutlineSort } from 'react-icons/md'
import { AiOutlineHeart,AiFillInstagram } from "react-icons/ai"
import { FaFacebookF, FaGoogle, FaLinkedinIn, FaPinterest } from "react-icons/fa"
import {IoIosRocket,IoIosBookmark} from "react-icons/io"
import {GiWhiteBook} from "react-icons/gi"

import "../App.css"
import {Container,Row,Col,Form,Button} from "react-bootstrap"
import Header from "../Components/Header"

export default function SingleJob() {
  const [JOB,setJOB] = useState({})

useEffect(()=>{
  console.log("JOBPAGE",JSON.parse(localStorage.getItem("JOB")))
setJOB(
  JSON.parse(localStorage.getItem("JOB"))
)
},[])

  return (
    <>
    <Header/>
    <Container fluid className="SingleJob">
      <Row  className="JobTitle-and-Button" >
        <Col xs={2} sm={2}  md={1} className="Job-Image">
        <img className='Logo-Company'  src={JOB.companyLogo} alt="company logo"/>
        </Col>
        <Col className="titleandsubtitles" xs={12} sm={12} md={7}>
          <Row><h3>
            {JOB.jobTitle}
            </h3></Row>
            <Row >
          <Col  > <MdLocationPin size={20} style={{marginRight:"2%"}}/>
          {JOB.jobLocation}
          </Col>
              
         
              <Col ><MdWork size={20} style={{marginRight:"2%"}}/>
              {JOB.jobType}</Col>
             
               
          
          <Col ><MdAccessTimeFilled size={20} style={{marginRight:"2%"}}/>
          {JOB.jobTimings}</Col>
            
        
         
      </Row>
        </Col>
        <Col md={4} sm={12} style={{paddingTop:"2%",}}>
        <Button variant="outline-warning" style={{height:"100%"}} >
      <AiOutlineHeart size={20}/>

    Save Job
  </Button>  
 
  <Button style={{backgroundColor:"#ff9902",width:"40%",marginLeft:"15%",height:"100%"}} variant="flat" >
    Apply
  </Button>  
 
        </Col>
      </Row>
      <Row className="ImgandDetail">
        <Col sm={12} md={8} >
        <img style={{borderRadius:"10px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} src={"https://preview.colorlib.com/theme/careers/images/sq_img_1.jpg" }alt="" />
        
        </Col>
        <Col >
        <Row className="Summary">
          <Row style={{marginBottom:"4%",color:"#ff9902"}} >
              <h4>Job Summary</h4>
          </Row>
          <Row > <strong>Published on: </strong><span> April 14, 2019</span></Row>
          <Row><strong>Vacancy: </strong><span> {JOB.jobVacancies}</span></Row>
          <Row><strong>Experience: </strong><span> {JOB.jobExperience}</span></Row>
          <Row><strong>Job Location: </strong><span> {JOB.jobLocation}</span></Row>
          <Row><strong>Salary: </strong><span> {JOB.jobSalary}</span></Row>
          <Row><strong>Gender: </strong><span> {JOB.jobGender}</span></Row>
          
        </Row>
        <Row className="Share">
          <h4 style={{marginBottom:"4%",color:"#ff9902"}}> Share</h4>
          <ul>
           
          <li><FaFacebookF size={28}/></li>
          <li><AiFillInstagram size={28}/></li>
          <li> <FaGoogle size={28}/></li>
          <li><FaLinkedinIn size={28}/></li>
          <li><FaPinterest size={28}/></li>
          </ul>


        </Row>
        </Col>


      </Row>
      <Row className="JobDescription">
        <div>
          <h4><MdOutlineSort/> Job Description</h4>
          <p>{JOB.jobDescription}</p>
             
        </div>
      </Row>


      <Row className="Responsibilities">
      <div >
          <h4><IoIosRocket style={{marginRight:"1%"}}/>Requirements</h4>
          <ul>
            {JOB.jobRequirements}
          </ul>
        </div>
      </Row>


      <Row className="EducationExperience">
      <div >
          <h4><GiWhiteBook style={{marginRight:"1%"}}/>Education + Experience</h4>
          <ul>
            <li>
              {JOB.jobEducation} 
              </li>
              <li>
              {JOB.jobExperience} 
              </li>
          </ul>
        </div>
      </Row>
      <Row>
      {/* <div className="OtherBenefits" >
          <h3><IoIosBookmark style={{marginRight:"1%"}}/>Other Benefits</h3>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </li>
              <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </li> <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </li> <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </li>
          </ul>
        </div> */}
      </Row>
    </Container>
    </>
  );
}