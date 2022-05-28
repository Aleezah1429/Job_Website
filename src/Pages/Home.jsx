import NavBar from '../Components/NavBar';
import Header from '../Components/Header';
import JobCard from '../Components/JobCard';
import Footer from "../Components/Footer"
import {Button} from "react-bootstrap"
import {useEffect, useState} from "react"
import { propTypes } from 'react-bootstrap/esm/Image';


function Home() {
  const [allJobs,setAllJobs] = useState([])

  useEffect(()=>{
    fetch('http://localhost:8001/AllJobs')
    .then(response => response.json())
    .then(data =>setAllJobs(data) );

},[])

  return (
    <div className="Home">
      <Header/>
      <h1 className='home-heading'>
        RECENT JOBS
      </h1>
      {allJobs.map((item,index)=>{
        if(index<=5){
          console.log(item)
        return(
      <JobCard companyDescription={item.companyDescription} companyLogo={item.companyLogo} companyName={item.companyName} 
      companyWebsite={item.companyWebsite} jobCategory={item.jobCategory} jobDescription={item.jobDescription}
      jobRequirements={item.jobRequirements} jobSalary={item.jobSalary.slice(0,20)} jobVacancies={item.jobVacancies}
      companyLocation={item.companyLocation} jobTitle={item.jobTitle} jobLocation={item.jobLocation} jobType={item.jobType} jobTimings={item.jobTimings} />
        )}
      })}
      <div className='see-more-div'>
      <Button onClick={()=>{window.location.replace("/AllJobs")}}  className='see-more-btn' variant="flat">
    More Jobs
  </Button>
      </div>
    </div>


  );
}

export default Home;
