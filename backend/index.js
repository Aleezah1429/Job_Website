const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
const { MongoClient, ServerApiVersion } = require("mongodb");
const{Login,loadMongoDb,getData,postData,postJob,getJobs,findData,ContactForm,jobsAccToCategory,SendAlerts,editUserProfile,UserProfile, getStatistics,UpdateAlert} = require("./functions.js")

loadMongoDb()

// For AllUsers
app.get("/AllUsers", (req, res) => {
  var resp = getData();
  resp.then((e) => {
    res.send(e);
  });
});

// All Jobs
app.get("/AllJobs", (req, res) => {
  var resp = getJobs();
  resp.then((e) => {
    res.send(e);
  });
});

// All Jobs acc to Category
app.post("/JobsAccToCategory", (req, res) => {
  console.log("Jobs acc to category", req.body);
  jobsAccToCategory(req, res);
});


// For Signup
app.post("/CreateUser", (req, res) => {
  console.log("New User", req.body);
  postData(req, res);
});

// For Login
app.post("/Login", (req, res) => {
  console.log("New User", req.body);
  Login(req, res);
});

// For JobPost
app.post("/PostJob", (req, res) => {
  console.log("New JOB", req.body);
  postJob(req, res);
});


// For JobFind
app.post("/FindJob", (req, res) => {
  console.log("Job", req.body);
  findData(req, res);
});


// For ContactForm
app.post("/ContactForm", (req, res) => {
  console.log("Form", req.body);
  ContactForm(req, res);
});


// For Job Alerts
app.post("/JobAlerts", (req, res) => {
  console.log("JobAlerts", req.body);
  SendAlerts(req, res);
});

// For Job Alert Update
app.post("/UpdateAlert", (req, res) => {
  console.log("UpdateAlert", req.body);
  UpdateAlert(req, res);
});

// For User Profile
app.post("/UserProfile", (req, res) => {
  console.log("UserProfile", req.body);
  UserProfile(req, res);
});


// For Edit User Profile
app.post("/EditProfile", (req, res) => {
  console.log("EditProfile", req.body);
  editUserProfile(req, res);
});


// For Satistics
app.get("/Statistics", (req, res) => {
  console.log("Statistics", req.body);
  var resp = getStatistics();
  resp.then((e) => {
    res.send(e);
  });
});

// getStatistics()

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT}`);
});
