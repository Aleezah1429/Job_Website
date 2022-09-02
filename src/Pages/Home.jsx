import NavBar from '../Components/NavBar';
import Header from '../Components/Header';
import JobCard from '../Components/JobCard';
import Footer from "../Components/Footer"
import { useEffect, useState } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { propTypes } from 'react-bootstrap/esm/Image';
import { motion } from "framer-motion";
import {connect} from "react-redux"
import CountUp from 'react-countup';
// import { useInView } from "react-intersection-observer";
// import { useAnimation } from "framer-motion"
import { Link,useHistory } from "react-router-dom";


function Home(props) {
  const history = useHistory();
  const [allJobs, setAllJobs] = useState([])
  const [candidates, setCandidates] = useState(0)
  const [companies, setCompanies] = useState(0)
  const [jobs, setJobs] = useState(0)


  useEffect(() => {
    console.log("USER",props.userInfo,process.env.REACT_APP_BASE_URL+'/AllJobs')
    fetch(process.env.REACT_APP_BASE_URL+'/AllJobs')
      .then(response => response.json())
      .then(data => setAllJobs(data));

      fetch(process.env.REACT_APP_BASE_URL+'/Statistics')
      .then(response => response.json())
      .then(data => {
        console.log("STATS",data)
        setCandidates(data.candidates)
        setJobs(data.jobs)
        setCompanies(data.companies)
      });


  }, [])



  useEffect(()=>{
  },[candidates])

  // const { ref, inView } = useInView();
  // const animation = useAnimation();

  // useEffect(() => {
  //   if (inView) {
  //     animation.start({
  //       x: 0,
  //       transition: { type: "spring", duration: 25, bounce: 0.3 }
  //     })
  //     // if (!inView) {
  //     //   animation.start({ x: "-100vw" })
  //     // }
  //   }

  // }, [inView])

  return (
    <div className="Home">
      <Header />
      <Row style={{marginTop:"5%",marginLeft:"2%",marginBottom:"10%"}}>
        <h1 className='home-heading' style={{marginLeft:"-1%"}}>STATISTICS</h1>
        <Row style={{textAlign:"center"}}>
          <Col sm={4}>
            <h1 style={{fontFamily:"fantasy",fontSize:"60px"}}>
            <CountUp start={0} end={candidates} duration={6} />
              </h1>
            <h3 style={{color:"#ff9902"}}>Candidates</h3>
          </Col>
         <Col sm={4}>
            <h1 style={{fontFamily:"fantasy",fontSize:"60px"}}>
            <CountUp start={0} end={jobs} duration={6} />
            </h1>
            <h3 style={{color:"#ff9902"}}>Jobs</h3>
          </Col>
          <Col sm={4}>
            <h1 style={{fontFamily:"fantasy",fontSize:"60px"}}>
            <CountUp start={0} end={companies} duration={6} />
            </h1>
            <h3 style={{color:"#ff9902"}}>Companies</h3>
          </Col>
        </Row>
      </Row>
      <h1 className='home-heading'>
        RECENT JOBS
      </h1>
      {allJobs.map((item, index) => {
        if (index <= 5) {
          console.log(item)
          return (
            <motion.div 
              initial={{ x: "-100vw" }}
              animate={{x: 0}}
              transition={{ type: "spring", duration: 4, bounce: 0.4 }}
            >
              <JobCard companyDescription={item.companyDescription} companyLogo={item.companyLogo} companyName={item.companyName}
                companyWebsite={item.companyWebsite} jobCategory={item.jobCategory} jobDescription={item.jobDescription}
                jobRequirements={item.jobRequirements} jobSalary={item.jobSalary.slice(0, 20)} jobVacancies={item.jobVacancies}
                companyLocation={item.companyLocation} jobTitle={item.jobTitle} jobLocation={item.jobLocation} jobType={item.jobType} jobTimings={item.jobTimings} />
            </motion.div>
          )
        }

      })}
      <div className='see-more-div'>
        <Button onClick={() => { history.push("/AllJobs") }} className='see-more-btn' variant="flat">
          More Jobs
        </Button>
      </div>
    </div>


  );
}

function mapStateToProps(state) {
  return {
      userInfo:state.userInfo
  }
}

export default connect(mapStateToProps,null)( Home);
