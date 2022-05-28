const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
const { MongoClient, ServerApiVersion } = require("mongodb");
const{Login,loadMongoDb,getData,postData,postJob,getJobs,findData,ContactForm} = require("./functions.js")

loadMongoDb()

// For AllUsers
app.get("/AllUsers", (req, res) => {
  var resp = getData();
  resp.then((e) => {
    res.send(e);
  });
});


app.get("/AllJobs", (req, res) => {
  var resp = getJobs();
  resp.then((e) => {
    res.send(e);
  });
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


const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT}`);
});
