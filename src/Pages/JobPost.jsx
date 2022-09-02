import React, { useEffect, useState, useRef } from 'react';
import '../App.css';
import { Form, Button, Row, Col } from "react-bootstrap"
import { storage } from '../Config/FirebaseConfig';
import { ref, getDownloadURL, uploadBytesResumable } from "@firebase/storage";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const JobPost = () => {

    const [jobTitle, setJobTitle] = useState("")
    const [jobDescription, setJobDescription] = useState("")
    const [jobLocation, setJobLocation] = useState("Karachi")
    const [jobStartTimings, setjobStartTimings] = useState("")
    const [jobEndTimings, setjobEndTimings] = useState("")
    const [jobTimings, setJobTimings] = useState("")
    const [jobType, setJobType] = useState("Full Time")
    const [jobCategory, setJobCategory] = useState("Engineer")
    const [jobRequirements, setJobRequirements] = useState("")
    const [jobEducation, setJobEducation] = useState("Matric Pass")
    const [jobExperience, setJobExperience] = useState("No Experience")
    const [jobVacancies, setJobVacancies] = useState("")
    const [jobSalary, setjobSalary] = useState(0)
    const [jobStartSalary, setjobStartSalary] = useState(0)
    const [jobEndSalary, setjobEndSalary] = useState(0)
    const [jobGender, setjobGender] = useState("Any")

    const [companyName, setCompanyName] = useState("")
    const [companyDescription, setCompanyDescription] = useState("")
    const [companyLocation, setCompanyLocation] = useState("Karachi")
    const [companyWebsite, setCompanyWebsite] = useState("")
    const [companyLogo, setCompanyLogo] = useState("")

    const [fieldSize, setFieldSize] = useState(60)
    const [disableBtn, setdisableBtn] = useState(true)

    // For Message
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
        if(data.message == "Successfully Post"){
          setJobTitle("")
          setJobDescription("")
          setJobLocation("")
          setJobCategory("")
          setJobEducation("")
          setJobExperience("")
          setJobTimings("")
          setJobType("")
          setJobRequirements("")
          setJobVacancies("")
          setjobSalary(0)
          setjobStartSalary(0)
          setjobEndSalary(0)
          setjobGender("")
          setjobStartTimings("")
          setjobEndTimings("")

          setCompanyName("")
          setCompanyDescription("")
          setCompanyLocation("")
          setCompanyLogo("")
          setCompanyWebsite("")
        }
        }

    useEffect(() => {
        if (jobStartTimings != "" && jobEndTimings != "") {
            setJobTimings(jobStartTimings + " - " + jobEndTimings)
        }
        if (jobStartSalary != 0 && jobEndSalary != 0) {
            console.log("JOB SALARY", "RS:" + jobStartSalary + " - " + "RS:" + jobEndSalary)
            setjobSalary("RS:" + jobStartSalary + " - " + "RS:" + jobEndSalary)
        }
        if (window.screen.width < 600) {
            setFieldSize(35)
        }

        if (jobTitle != "" && jobDescription != "" && jobLocation != "" && jobTimings != "" && jobType != ""
            && jobCategory != "" && jobEducation != "" && jobExperience != "" && jobRequirements != "" && jobVacancies != "" && companyName != "" && companyDescription != ""
            && companyLogo != "" && companyLocation != "" && companyWebsite != "" && jobStartTimings != "" && jobEndTimings != "" && jobSalary != "" && jobGender != "" && jobSalary !="") {
            setdisableBtn(false)
        }
    }, [window.screen.width, jobTitle, jobDescription, jobLocation, jobTimings, jobType, jobCategory,
        jobEducation, jobExperience, jobVacancies, companyName, companyLocation, companyWebsite, companyDescription, companyLogo
        , jobStartTimings, jobEndTimings, jobStartSalary, jobEndSalary, jobSalary, jobGender])

    const SubmitJob = (event) => {

        event.preventDefault()
        if (jobTitle != "" && jobDescription != "" && jobLocation != "" && jobTimings != "" && jobType != ""
            && jobCategory != "" && jobEducation != "" && jobExperience != "" && jobRequirements != "" && jobVacancies != "" && companyName != "" && companyDescription != ""
            && companyLogo != "" && companyLocation != "" && companyWebsite != "" && jobSalary != "" && jobGender != "") {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    jobTitle, jobDescription, jobLocation, jobTimings, jobType, jobCategory,
                    jobEducation, jobExperience, jobVacancies, companyName, companyLocation, companyWebsite, companyDescription, companyLogo, jobRequirements, jobSalary, jobGender
                })
            };
            // setShow(true)
            fetch(process.env.REACT_APP_BASE_URL+'/PostJob', requestOptions)
                .then(response => response.json())
                .then(data => save(data));
        }
        else {
            console.log("FILL ALL")
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


    const fileInput = useRef();
    const selectFile = () => {
        fileInput.current.click();
    }

    return (
        <div className='Container job-post jobPost_bg'>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={variant} sx={{ width: '100%' }}>
          {msg}
        </Alert>
      </Snackbar>
            <div className='Container '>
                {/* <header>
                <div className='HeaderText'>
                    <div >
                        <h1>POST A JOB</h1>
                        <p>Find your dream jobs with our powerful <b>JOB SEARCH WEB</b> </p>
                    </div>
                </div>
            </header> */}
            </div>
            {console.log("AAS", window.screen.width)}
            <div>
                <h1 className='about-heading'>POST A JOB</h1>
                <div style={{ justifyContent: "center", textAlign: "center", alignItems: "center", marginBottom: "-4%" }}>
                    <img height={"10%"} width={"20%"} src={"https://d341ezm4iqaae0.cloudfront.net/assets/2019/09/30225551/indeed-Hub-illustrations-03.png"} alt="" />
                </div>
            </div>
            <Form className='post-form'>
                <h5 className='about-heading'>JOB DETAILS</h5>

                <Row className='form-row'>
                    <Col className='jobpost-title' sm={3}>
                        JOB TITLE
                    </Col>
                    <Col sm={9}>
                        <input className='postjob-fied' required onChange={(e) => setJobTitle(e.target.value)} size={fieldSize} type="text" placeholder='Enter job title' />
                    </Col>
                </Row>

                <Row className='form-row'>
                    <Col className='jobpost-title' sm={3}>
                        JOB DESCRIPTION
                    </Col>
                    <Col sm={9}>
                        <textarea className='postjob-desc_fied' required onChange={(e) => setJobDescription(e.target.value)} rows={4} cols={30} type="text" placeholder='Enter job description' />
                    </Col>
                </Row>

                <Row className='form-row'>
                    <Col className='jobpost-title' sm={3}>
                        JOB LOCATION
                    </Col>
                    <Col sm={9}>
                        <select className='Select postjob-fied' required onChange={(e) => setJobLocation(e.target.value)} >
                            <option value="Karachi">Karachi</option>
                            <option value="Islamabad">Islamabad</option>
                            <option value="Lahore">Lahore</option>

                        </select>
                    </Col>
                </Row>

                <Row className='form-row'>
                    <Col className='jobpost-title' sm={3}>
                        JOB TIMINGS
                    </Col>
                    <Col sm={9}>
                        <input className='postjob-fied' required onChange={(e) => setjobStartTimings(e.target.value)} size={fieldSize} type="time" />{" "} to {"  "}
                        <input className='postjob-fied' required onChange={(e) => setjobEndTimings(e.target.value)} size={fieldSize} type="time" />

                    </Col>
                </Row>


                <Row className='form-row'>
                    <Col className='jobpost-title' sm={3}>
                        JOB TYPE
                    </Col>
                    <Col sm={9}>
                        <select defaultValue={"Full Time"} className='Select postjob-fied' required onChange={(e) => setJobType(e.target.value)} >
                            <option value="Full Time">Full Time</option>
                            <option value="Part Time">Part Time</option>
                            <option value="Internship">Internship</option>


                        </select>
                    </Col>
                </Row>

                <Row className='form-row'>
                    <Col className='jobpost-title' sm={3}>
                        JOB CATEGORY
                    </Col>
                    <Col sm={9}>
                        <select defaultValue={"Engineer"} className='Select postjob-fied' required onChange={(e) => setJobCategory(e.target.value)} >
                            <option value="Engineer">Engineer</option>
                            <option value="Computer Engineer">Computer Engineer</option>
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
                    <Col className='jobpost-title' sm={3}>
                        JOB REQUIREMENTS
                    </Col>
                    <Col sm={9}>
                        <textarea className='postjob-desc_fied' rows={4} cols={30} required onChange={(e) => setJobRequirements(e.target.value)} size={fieldSize} type="text" placeholder='Enter job requirements' />
                    </Col>
                </Row>

                <Row className='form-row'>
                    <Col className='jobpost-title' sm={3}>
                        EDUCATION
                    </Col>
                    <Col sm={9}>
                        <select defaultValue={"Matric Pass"} className='Select postjob-fied' required onChange={(e) => setJobEducation(e.target.value)}>
                            <option value="Matric Pass">Matric Pass</option>
                            <option value="Intermediate Pass">Intermediate Pass</option>
                            <option value="Undergraduate">Undergraduate</option>
                            <option value="Graduated">Graduated</option>
                            <option value="Masters">Masters</option>

                        </select>
                    </Col>
                </Row>

                <Row className='form-row'>
                    <Col className='jobpost-title' sm={3}>
                        EXPERIENCE
                    </Col>
                    <Col sm={9}>
                        <select defaultValue={"No Experience"} className='Select postjob-fied' required onChange={(e) => setJobExperience(e.target.value)} >
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
                    <Col className='jobpost-title' sm={3}>
                        GENDER
                    </Col>
                    <Col sm={9}>
                        <select defaultValue={"Any"} className='Select postjob-fied' required onChange={(e) => setjobGender(e.target.value)} >
                            <option value="Any">Any</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </Col>
                </Row>

                <Row className='form-row'>
                    <Col className='jobpost-title' sm={3}>
                        VACANCIES AVAILABLE
                    </Col>
                    <Col sm={9}>
                        <input className='postjob-fied' required onChange={(e) => setJobVacancies(e.target.value)} size={fieldSize} type="number" placeholder='Enter no. of vacancies' />
                    </Col>
                </Row>

                <Row className='form-row'>
                    <Col className='jobpost-title' sm={3}>
                        JOB SALARY (in Rupees)
                    </Col>
                    <Col sm={9}>
                        <input className='postjob-fied' required onChange={(e) => setjobStartSalary(e.target.value)} placeholder="10000" size={fieldSize} type="Number" />{" "} to {"  "}
                        <input className='postjob-fied' required onChange={(e) => setjobEndSalary(e.target.value)} placeholder="20000" size={fieldSize} type="Number" />

                    </Col>
                </Row>





                <h5 className='about-heading'>COMPANY DETAILS</h5>


                <Row className='form-row'>
                    <Col className='jobpost-title' sm={3}>
                        COMPANY NAME
                    </Col>
                    <Col sm={9}>
                        <input className='postjob-fied' required onChange={(e) => setCompanyName(e.target.value)} size={fieldSize} type="text" placeholder='Enter company name' />
                    </Col>
                </Row>

                <Row className='form-row'>
                    <Col className='jobpost-title' sm={3}>
                        COMPANY DESCRIPTION
                    </Col>
                    <Col sm={9}>
                        <textarea className='postjob-desc_fied' required onChange={(e) => setCompanyDescription(e.target.value)} rows={4} cols={30} type="text" placeholder='Enter company description' />
                    </Col>
                </Row>

                <Row className='form-row'>
                    <Col className='jobpost-title' sm={3}>
                        COMPANY LOCATION
                    </Col>
                    <Col sm={9}>
                        <select className='Select postjob-fied' required onChange={(e) => setCompanyLocation(e.target.value)} >
                            <option value="Karachi">Karachi</option>
                            <option value="Islamabad">Islamabad</option>
                            <option value="Lahore">Lahore</option>

                        </select>
                    </Col>
                </Row>

                <Row className='form-row'>
                    <Col className='jobpost-title' sm={3}>
                        COMPANY WEBSITE
                    </Col>
                    <Col sm={9}>
                        <input className='postjob-fied' required onChange={(e) => setCompanyWebsite(e.target.value)} size={fieldSize} type="text" placeholder='https://' />
                    </Col>
                </Row>

                {/* <Row className='form-row'>
                    <Col className='jobpost-title' sm={3}>
                        COMPANY LOGO
                    </Col>
                    <Col sm={9}>
                        <input required id="Logo" onChange={(e) => handleSubmit(e)} size={fieldSize} type="file" />
                    </Col>
                </Row> */}

                 <Row className='form-row'>
                    <Col className='jobpost-title' sm={3}>
                        COMPANY LOGO
                    </Col>
                    <Col sm={9}>
                    <input className='upload-logo' accept="image/*" onChange={(e) => handleSubmit(e)} type="file" />
                    {/* <button onClick={selectFile} className='upload-logo' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cloud-upload m-1" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
                            <path fill-rule="evenodd" d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z" />
                        </svg>
                        <span className='ms-2' >Upload</span>
                    </button> */}
                    </Col>
                </Row>

                <Button disabled={disableBtn} onClick={(event) => SubmitJob(event)} className="MyBtn" variant="flat" >
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default JobPost;