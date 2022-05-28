import React, { useEffect, useState } from 'react';
import '../App.css'
import { Form, Button, Row, Col } from "react-bootstrap"
import { storage } from '../Config/FirebaseConfig';
import { ref, getDownloadURL, uploadBytesResumable } from "@firebase/storage";
const JobPost = () => {

    const [jobTitle, setJobTitle] = useState("")
    const [jobDescription, setJobDescription] = useState("")
    const [jobLocation, setJobLocation] = useState("")
    const [jobTimings, setJobTimings] = useState("")
    const [jobType, setJobType] = useState("")
    const [jobCategory, setJobCategory] = useState("")
    const [jobRequirements, setJobRequirements] = useState("")
    const [jobEducation, setJobEducation] = useState("")
    const [jobExperience, setJobExperience] = useState("")
    const [jobVacancies, setJobVacancies] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [companyDescription, setCompanyDescription] = useState("")
    const [companyLocation, setCompanyLocation] = useState("")
    const [companyWebsite, setCompanyWebsite] = useState("")
    const [companyLogo, setCompanyLogo] = useState("")

    const [fieldSize, setFieldSize] = useState(60)

    useEffect(() => {
        if (window.screen.width < 600) {
            setFieldSize(35)

        }

    }, [window.screen.width])


    const SubmitJob = (event) => {
        event.preventdefault()
        if (jobTitle != "" && jobDescription != "" && jobLocation != "" && jobTimings != "" && jobType != ""
            && jobCategory != "" && jobEducation != "" && jobExperience != "" && jobVacancies != "" && companyName != "" && companyDescription != ""
            && companyDescription != "" && companyDescription != "" && companyLogo != "" && companyLocation != "" && companyWebsite != "") {
            // console.log(email, pass)
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    jobTitle, jobDescription, jobLocation, jobTimings, jobType, jobCategory,
                    jobEducation, jobExperience, jobVacancies, companyName, companyLocation, companyWebsite, companyDescription, companyLogo
                })
            };
            // setShow(true)
            fetch('http://localhost:8001/PostJob', requestOptions)
                .then(response => response.json())
            //   .then(data => setMsg(data.message));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const file = e.target.files[0]
        console.log(e.target.files[0])
        if (!file) return;

        const storageRef = ref(storage, `CompanyLogos/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on("state_changed",
            (snapshot) => {
                console.log("in progress")

                const progress =
                    Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                // setProgresspercent(progress);
            },
            (error) => {
                alert(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log("URL", downloadURL)
                    setCompanyLogo(downloadURL)
                });
            }
        );

    }

    return (
        <div className='Container job-post'>
            {/* <div className='Container'>
                <header>
                    <div className='HeaderText'>
                        <div >
                            <h1>POST A JOB</h1>
                            <p>Find your dream jobs with our powerful <b>JOB SEARCH WEB</b> </p>
                        </div>
                    </div>
                </header>
            </div> */}
            {console.log("AAS", window.screen.width)}
            {/* <div>
                <h1 className='about-heading'>POST A JOB</h1>
            </div> */}
            <div className='jobPost_bg'>
                <h3 className='about-heading'>JOB DETAILS</h3>
                <Form className='post-form'>
                    <Row className='form-row'>
                        <Col sm={3}>
                            JOB TITLE
                        </Col>
                        <Col sm={9}>
                            <input required onChange={(e) => setJobTitle(e.target.value)} size={fieldSize} type="text" placeholder='Enter job title' />
                        </Col>
                    </Row>

                    <Row className='form-row'>
                        <Col sm={3}>
                            JOB DESCRIPTION
                        </Col>
                        <Col sm={9}>
                            <textarea required onChange={(e) => setJobDescription(e.target.value)} rows={4} cols={30} type="text" placeholder='Enter job description' />
                        </Col>
                    </Row>

                    <Row className='form-row'>
                        <Col sm={3}>
                            JOB LOCATION
                        </Col>
                        <Col sm={9}>
                            <select className='Select' required onChange={(e) => setJobLocation(e.target.value)} name="cars" id="cars">
                                <option value="Karachi">Karachi</option>
                                <option value="Islamabad">Islamabad</option>
                                <option value="Lahore">Lahore</option>

                            </select>
                        </Col>
                    </Row>

                    <Row className='form-row'>
                        <Col sm={3}>
                            JOB TIMINGS
                        </Col>
                        <Col sm={9}>
                            <input required onChange={(e) => setJobTimings(e.target.value)} size={fieldSize} type="text" placeholder='Enter job timings' />
                        </Col>
                    </Row>


                    <Row className='form-row'>
                        <Col sm={3}>
                            JOB TYPE
                        </Col>
                        <Col sm={9}>
                            <input required onChange={(e) => setJobType(e.target.value)} size={fieldSize} type="text" placeholder='Enter job type' />
                        </Col>
                    </Row>

                    <Row className='form-row'>
                        <Col sm={3}>
                            JOB CATEGORY
                        </Col>
                        <Col sm={9}>
                            <select className='Select' required onChange={(e) => setJobCategory(e.target.value)} name="cars" id="cars">
                                <option value="volvo">Engineer</option>
                                <option value="saab">Computer Engineer</option>
                                <option value="Doctor">Doctor</option>
                                <option value="Teacher">Teacher</option>
                                <option value="Medicine">Medicine</option>
                                <option value="Musician">Musician</option>
                                <option value="Painter">Painter</option>
                                <option value="Receptionist">Receptionist</option>
                                <option value="Business">Business</option>
                                <option value="Delivery">Delivery</option>
                                <option value="Dentist">Dentist</option>
                                <option value="Reporter">Reporter</option>


                            </select>
                        </Col>
                    </Row>

                    <Row className='form-row'>
                        <Col sm={3}>
                            JOB REQUIREMENTS
                        </Col>
                        <Col sm={9}>
                            <input required onChange={(e) => setJobRequirements(e.target.value)} size={fieldSize} type="text" placeholder='Enter job requirements' />
                        </Col>
                    </Row>

                    <Row className='form-row'>
                        <Col sm={3}>
                            EDUCATION
                        </Col>
                        <Col sm={9}>
                            <select className='Select' required onChange={(e) => setJobEducation(e.target.value)} name="cars" id="cars">
                                <option value="Matric Pass">Matric Pass</option>
                                <option value="Intermediate Pass">Intermediate Pass</option>
                                <option value="Undergraduate">Undergraduate</option>
                                <option value="Graduated">Graduated</option>
                                <option value="Masters">Masters</option>

                            </select>
                        </Col>
                    </Row>

                    <Row className='form-row'>
                        <Col sm={3}>
                            EXPERIENCE
                        </Col>
                        <Col sm={9}>
                            <select className='Select' required onChange={(e) => setJobExperience(e.target.value)} name="cars" id="cars">
                                <option value="No Experience">No Experience</option>
                                <option value="less than a year">less than a year</option>
                                <option value="more than a year">more than a year</option>
                                <option value="more than 2 years">more than 2 years</option>
                                <option value="more than 3 years">more than 3 years</option>
                                <option value="more than 5 years">more than 5 years</option>
                                <option value="more than 5 years">more than 5 years</option>
                                <option value="more than 7 years">more than 7 years</option>



                            </select>
                        </Col>
                    </Row>


                    <Row className='form-row'>
                        <Col sm={3}>
                            VACANCIES AVAILABLE
                        </Col>
                        <Col sm={9}>
                            <input required onChange={(e) => setJobVacancies(e.target.value)} size={fieldSize} type="number" placeholder='Enter no. of vacancies' />
                        </Col>
                    </Row>


                    <h3 className='about-heading'>COMPANY DETAILS</h3>


                    <Row className='form-row'>
                        <Col sm={3}>
                            COMPANY NAME
                        </Col>
                        <Col sm={9}>
                            <input required onChange={(e) => setCompanyName(e.target.value)} size={fieldSize} type="text" placeholder='Enter company name' />
                        </Col>
                    </Row>

                    <Row className='form-row'>
                        <Col sm={3}>
                            COMPANY DESCRIPTION
                        </Col>
                        <Col sm={9}>
                            <textarea required onChange={(e) => setCompanyDescription(e.target.value)} rows={4} cols={30} type="text" placeholder='Enter company description' />
                        </Col>
                    </Row>

                    <Row className='form-row'>
                        <Col sm={3}>
                            JOB LOCATION
                        </Col>
                        <Col sm={9}>
                            <select className='Select' required onChange={(e) => setCompanyLocation(e.target.value)} >
                                <option value="Karachi">Karachi</option>
                                <option value="Islamabad">Islamabad</option>
                                <option value="Lahore">Lahore</option>

                            </select>
                        </Col>
                    </Row>

                    <Row className='form-row'>
                        <Col sm={3}>
                            COMPANY WEBSITE
                        </Col>
                        <Col sm={9}>
                            <input required onChange={(e) => setCompanyWebsite(e.target.value)} size={fieldSize} type="text" placeholder='https://' />
                        </Col>
                    </Row>

                    <Row className='form-row'>
                        <Col sm={3}>
                            COMPANY LOGO
                        </Col>
                        <Col sm={9}>
                            <input required id="Logo" onChange={(e) => handleSubmit(e)} size={fieldSize} type="file" />
                        </Col>
                        {/* <img src={companyLogo} alt="" srcset="" /> */}
                    </Row>
                    <Button onClick={() => SubmitJob()} type="submit" style={{ backgroundColor: "#ff9902", height: "70%" }} variant="flat" >
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default JobPost;