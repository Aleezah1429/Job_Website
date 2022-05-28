import React, { useEffect, useState } from 'react';
import '../App.css';
import UseAnimations from "react-useanimations";
import facebook from 'react-useanimations/lib/facebook'
import twitter from 'react-useanimations/lib/twitter'
import instagram from 'react-useanimations/lib/instagram'
import linkedin from 'react-useanimations/lib/linkedin'
import { Row, Col, Button } from "react-bootstrap"

const Contact = () => {

    const [filled, setFilled] = useState(false)


    const SubmitContactForm = (event) => {
        event.preventDefault()
        var name = document.getElementById("name").value
        var email = document.getElementById("email").value
        var message = document.getElementById("message").value
        console.log(name, email, message)
        if (name != "" && email != "" && message != "") {
            fetch('http://localhost:8001/ContactForm', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message })
            })
                .then(response => response.json())
                .then(data => console.log(data)
                ).then(
                    setFilled(true)

                ).then(document.getElementById("name").value = "",
                    document.getElementById("email").value = "",
                    document.getElementById("message").value = ""
                )

        }
    }

    return (
        <div className='Container' style={{ overflowX: "hidden" }}>
            {/* <header>
                <div className='HeaderText'>
                    <div >
                        <h1>CONTACT</h1>
                        <p>Find your dream jobs with our powerful <b>JOB SEARCH WEB</b> </p>
                    </div>
                </div>
            </header> */}
            <div className='contact_bg'>
                <h1 className='about-heading'>CONTACT US</h1>

                <form className='contact_form'  >
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input required id='name' type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input id='email' type="email" className="form-control" aria-describedby="emailHelp" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea required id='message' className="form-control" rows="5"></textarea>
                    </div>
                    <Button type='submit' onClick={(e) => SubmitContactForm(e)} className="btn BTN">
                        {
                            filled ? <img width={35} height={30} src="https://www.freeiconspng.com/uploads/accept-tick-icon-12.png" />
                                : "Submit"
                        }

                    </Button>
                </form>
                <div className='Contact-Icons-div'>
                    <Row className='Contact-Socialmedia'>
                        <h2 style={{ marginBottom: "5%", fontWeight: "bold" }}>Social Media</h2>
                        <Col>
                            <UseAnimations strokeColor='#ff9902' speed={2} animation={facebook} size={56} />
                        </Col>
                        <Col>
                            <UseAnimations strokeColor='#ff9902' speed={2} animation={instagram} size={56} />
                        </Col>
                        <Col>
                            <UseAnimations strokeColor='#ff9902' speed={2} animation={twitter} size={56} />
                        </Col>
                        <Col>
                            <UseAnimations strokeColor='#ff9902' speed={2} animation={linkedin} size={56} />
                        </Col>

                    </Row>
                </div>
            </div>

        </div>
    )
}

export default Contact;