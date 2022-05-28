import React from 'react';
import '../App.css'
import { Col, Row } from "react-bootstrap";
import { BiSearchAlt } from 'react-icons/bi';
import { RiWallet2Fill } from 'react-icons/ri';
import { GiGlobe } from 'react-icons/gi';


const About = () => {

    const style = { color: "#ff9902", fontSize: "300%" }

    return (
        <div className='Container'>
            <header>
                <div className='HeaderText'>
                    <div>
                        <h1>ABOUT</h1>
                        <p>Find your dream jobs with our powerful <b>JOB SEARCH WEB</b> </p>
                        </div>
                </div>
            </header>
            <div>
                <h1 className='about-heading'>ABOUT US</h1>
            </div>
            <div>
                <h2 className='descr-heading'> How Jobworld Works for You </h2>
            </div>
            <Row className='about-desc-row'>
                <Col xs={12} sm={4} m={4} lg={4} className='col-heading'>Perfect Search Tool <br/>
                <BiSearchAlt style={style} className="icons" /> <br/>
                <p>
                Voluptatum corporis officia sapiente magni quo dolorem numquam,
                    accusamus esse excepturi, asperiores necessitatibus molestias aliquam eveniet?
                    Pariatur ducimus perferendis dolorem omnis consequuntur.
                </p>
                </Col>


                <Col xs={12} sm={4} m={4} lg={4} className='col-heading'>Highly Paid Jobs <br/>
                <RiWallet2Fill style={style} className="icons" /> <br/>
                <p> 
                Voluptatum corporis officia sapiente magni quo dolorem numquam,
                    accusamus esse excepturi, asperiores necessitatibus molestias aliquam eveniet?
                    Pariatur ducimus perferendis dolorem omnis consequuntur.
                </p>
                </Col>

                <Col xs={12} sm={4} m={4} lg={4} className='col-heading'>5757 Companies <br/>
                <GiGlobe style={style} className="icons" />
                <br/>
                <p> 
                Voluptatum corporis officia sapiente magni quo dolorem numquam,
                    accusamus esse excepturi, asperiores necessitatibus molestias aliquam eveniet?
                    Pariatur ducimus perferendis dolorem omnis consequuntur.
                </p>
                </Col>
            </Row>
            

        </div>
    )
}

export default About;