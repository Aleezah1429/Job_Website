import React from 'react';
import '../App.css'
import {Row,Col} from "react-bootstrap"
import Computer from "../Assests/Computer.png"
import Business from "../Assests/Business.png"
import Delivery from "../Assests/Delivery.png"
import Dentist from "../Assests/Dentist.png"
import Doctor from "../Assests/Doctor.png"
import Engineer from "../Assests/Engineer.png"
import Medicine from "../Assests/Medicine.png"
import Musician from "../Assests/Musician.png"
import Painter from "../Assests/Painter.png"
import Receptionist from "../Assests/Receptionist.png"
import Reporter from "../Assests/Reporter.png"
import Teacher from "../Assests/Teacher.png"
import {Link} from "react-router-dom"








const Categories = () => {
    return (
        <div className='Container'>
            <header>
                <div className='HeaderText'>
                    <div >
                        <h1>CATEGORIES</h1>
                        <p>Find your dream jobs with our powerful <b>JOB SEARCH WEB</b> </p>
                    </div>
                </div>
            </header>
            <div>
                <h1 className='about-heading'>CATEGORIES</h1>
            </div>

            <Row className='category-row' sm={5} xs={3} m={5} lg={5}>
                <Col>
                
                <img className='category-img' src={Computer} alt="" /> <br /> <strong> Computer Engineer </strong>
                </Col>
                <Col>
                <img className='category-img' src={Engineer} alt="" /><br /><strong> Engineer</strong>
        
                </Col>
                <Col>
                <img className='category-img' src={Medicine} alt="" /><br /><strong>Medicine</strong>
                </Col>
                <Col>
                <img className='category-img' src={Doctor} alt="" /><br /><strong> Doctor</strong>
                </Col>
                <Col>
                <img className='category-img' src={Musician} alt="" /><br /><strong>Musician</strong>
                </Col>
                <Col>
                <img className='category-img' src={Painter} alt="" /><br /><strong>Painter</strong>
                </Col>
                <Col>
                <img className='category-img' src={Receptionist} alt="" /><br /><strong>Receptionist</strong>
                </Col>
                <Col>
                <img className='category-img' src={Business} alt="" /><br /><strong>Business</strong>
                </Col>
                <Col>
                <img className='category-img' src={Delivery} alt="" /><br /><strong>Delivery</strong>
                </Col>
                <Col>
                <img className='category-img' src={Dentist} alt="" /><br /><strong>Dentist</strong>
                </Col>
                <Col>
                <img className='category-img' src={Reporter} alt="" /><br /><strong>Reporter</strong>
                </Col>
                <Col>
                <img className='category-img' src={Teacher} alt="" /><br /><strong>Teacher</strong>
                </Col>
                
                

            </Row>
        </div>
    )
}

export default Categories;