import NavBar from '../Components/NavBar';
import Header from '../Components/Header';
import { Form, Col, Row, Button } from "react-bootstrap";
import JobCard from '../Components/JobCard';
import {useState,useEffect} from "react"


function JobSearch() {
  const [allJobs,setAllJobs] = useState([])
  const [allJobsFilter,setAllJobsFilter] = useState([])

  const [search,setSearch] = useState(false)


  useEffect(()=>{
    fetch('http://localhost:8001/AllJobs')
    .then(response => response.json())
    .then(data =>setAllJobs(data) )

},[])


useEffect(()=>{
// console.log("ALL",allJobs)
var filterCategory = document.getElementById("Category").value
var filterLocation = document.getElementById("Location").value
var filterKeyword = document.getElementById("Keyword").value


console.log("ALL",filterLocation,filterCategory,filterKeyword)
if(filterLocation!="All Location"){
  // setAllJobsFilter(allJobs.filter((item)=>
  //   item.jobLocation == filterLocation
  // ))
  fetch('http://localhost:8001/FindJob', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({filterLocation})
  })
    .then(response => response.json())
    .then(data => setAllJobsFilter(data.result));
  setSearch(false)
}

if(filterCategory!="All Category"){
//   setAllJobsFilter(allJobs.filter((item)=>
//   item.jobCategory == filterCategory
// ))
  fetch('http://localhost:8001/FindJob', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({filterCategory})
  })
    .then(response => response.json())
    .then(data => setAllJobsFilter(data.result));
  setSearch(false)
}

if(filterCategory!="All Category" && filterLocation!="All Location"){
  //   setAllJobsFilter(allJobs.filter((item)=>
  //   item.jobCategory == filterCategory
  // ))
    fetch('http://localhost:8001/FindJob', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({filterCategory,filterLocation})
    })
      .then(response => response.json())
      .then(data => setAllJobsFilter(data.result));
    setSearch(false)
  }

  if(filterKeyword!=""){
      setAllJobsFilter(allJobs.filter((item)=>{
    var searchedItem = item.jobTitle.toLowerCase()
    console.log(searchedItem)
     return searchedItem.includes(filterKeyword.toLowerCase())
      }
    ))
    
      setSearch(false)
    }
console.log(allJobsFilter)

}
,[search])
  return (
    <div className="JobSearch">
      <div className='Container'>
        <header>
          <div className='HeaderText'>
            <div className="SearchBox">
              <Row className="mb-4 RowStyle">
                <Form.Group className="SearchJob" as={Col} sm={10} md={3}>
                  <Form.Select id='Category'>
                    <option>All Category</option>
                    <option value="Doctor" >Doctor</option>
                    <option value="Computer Engineer" >Computer Engineer</option>
                    <option value="Engineer" >Engineer</option>
                    <option value="Receptionist" >Receptionist</option>
                    <option value="Teacher" >Teacher</option>
                    <option value="Business" >Business</option>



                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} className="SearchJob" sm={10} md={3}>
                  <Form.Select id='Location' >
                    <option>All Location</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Quetta">Quetta</option>
                    <option value="Peshawar">Peshawar</option>



                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} className="SearchJob" sm={10} md={3}>
               
    <Form.Control id="Keyword" style={{marginTop:18}} type="text" placeholder="Search Keyword" />
                </Form.Group>

                <Form.Group as={Col} sm={10} md={3}>
                  <Button onClick={()=>setSearch(true)} className="search-btn" style={{backgroundColor:"rgb(2, 35, 95)"}}>Search</Button>
                </Form.Group>

              </Row>
            </div>

          </div>
        </header>
      </div>
      {allJobsFilter.map((item,index)=>{
      
        return(
      <JobCard key={index} jobTitle={item.jobTitle} location={item.jobLocation} typeofWork={item.jobType} timing={item.jobTimings} />
        )}
      )}

    </div>
  );
}

export default JobSearch;
