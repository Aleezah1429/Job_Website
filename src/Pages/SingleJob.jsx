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
setJOB(
  JSON.parse(localStorage.getItem("JOB"))
)
},[])

  return (
    <>
    <Header/>
    <Container className="SingleJob">
      <Row  className="JobTitle-and-Button" >
        <Col xs={2} sm={2}  md={1} className="Job-Image">
        <img className='Logo-Company'  src={JOB.companyLogo} alt="company logo"/>
        </Col>
        <Col className="titleandsubtitles" xs={10} sm={10} md={7}>
          <Row><h2>
            {JOB.jobTitle}
            </h2></Row>
            <Row style={{width:"75%"}} >
          <Col > <MdLocationPin size={20} style={{marginRight:"2%"}}/>
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
 
  <Button style={{backgroundColor:"#ff9902",width:"50%",marginLeft:"15%",height:"100%"}} variant="flat" >
    Apply
  </Button>  
 
        </Col>
      </Row>
      <Row className="ImgandDetail">
        <Col sm={12} md={8} >
        <img src={"https://preview.colorlib.com/theme/careers/images/sq_img_1.jpg" }alt="" />
        
        </Col>
        <Col >
        <Row className="Summary">
          <Row style={{marginBottom:"4%",color:"#ff9902"}} >
              <h3>Job Summary</h3>
          </Row>
          <Row > <strong>Published on: </strong><span> April 14, 2019</span></Row>
          <Row><strong>Vacancy: </strong><span> April 14, 2019</span></Row>
          <Row><strong>Employment Status: </strong><span> April 14, 2019</span></Row>
          <Row><strong>Experience: </strong><span> April 14, 2019</span></Row>
          <Row><strong>Job Location: </strong><span> April 14, 2019</span></Row>
          <Row><strong>Salary: </strong><span> April 14, 2019</span></Row>
          <Row><strong>Gender: </strong><span> April 14, 2019</span></Row>
          <Row><strong>Application Deadline: </strong><span> April 14, 2019</span></Row>
          
        </Row>
        <Row className="Share">
          <h3 style={{marginBottom:"4%",color:"#ff9902"}}> Share</h3>
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
          <h3><MdOutlineSort/> Job Description</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas hic atque ab consectetur. Distinctio,
             autem dolorum quia libero ipsa tenetur a recusandae neque nihil aut adipisci minus? A, quam fugit!
             </p>
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas hic atque ab consectetur. Distinctio,
             autem dolorum quia libero ipsa tenetur a recusandae neque nihil aut adipisci minus? A, quam fugit!
             </p>
             
        </div>
      </Row>


      <Row className="Responsibilities">
      <div >
          <h3><IoIosRocket style={{marginRight:"1%"}}/>Responsibilities</h3>
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
        </div>
      </Row>


      <Row className="EducationExperience">
      <div >
          <h3><GiWhiteBook style={{marginRight:"1%"}}/>Education + Experience</h3>
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
      <div className="OtherBenefits" >
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
        </div>
      </Row>
    </Container>
    </>
  );
}