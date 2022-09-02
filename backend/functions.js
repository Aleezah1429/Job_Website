const express = require("express");
const app = express();
const cors = require("cors");
const nodemailer = require('nodemailer');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
const { MongoClient, ServerApiVersion } = require("mongodb");

var mongoResult;

//load MongoDb
async function loadMongoDb() {
    const uri =
        "mongodb+srv://wajahat:wajju123@cluster0.0buc1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: ServerApiVersion.v1,
    });
    mongoResult = await client.connect();
    //   let collection = mongoResult.db("GoJobber").collection("Jobs");
    //   collection.insertOne({jobTitle:"Software Engineer", jobDescription: "We are searching for enthusiastic candidates, that aim to learn and grow, simultaneously to join our dynamic organization.", jobLocation: "Karachi",
    //     jobTimings: "9am-5pm",jobType: "Full-time",jobCategory: "Computer",jobSalary:"Rs 40,000 - Rs 80,000 a month",
    //     jobRequirements: "Reliably commute or planning to relocate before starting work",jobVacancies: "8",companyName: "kcompute Pvt Ltd",
    //     companyDescription: "Good computer company",companyLocation: "Karachi",companyWebsite: "hr(at)qfnetwork.org",
    //     companyLogo: "https://www.logodesign.net/logo/abstract-arrow-with-financial-bars-76ld.png"}, function (error, response) {
    // })
}


// Login
const Login = async(req, res) => {
    // console.log("Req", req.body)
    let collection = mongoResult.db("GoJobber").collection("Users");

    collection.findOne({ email: req.body.email }).then((user, err) => {
        if (user) {
            if (user.pass == req.body.pass) {
                res.status(400).send({ message: "Successfully Login", variant: "success" });
                console.log("Successfully Login")
            } else {
                res.status(400).send({ message: "Incorrect Password", variant: "error" });
                console.log("Incorrect Password")
            }
            return;
        } else {
            res.status(400).send({ message: "Incorrect Email", variant: "error" });
            console.log("Incorrect Email")
            return;
        }
    });

};

//getUsers
async function getData() {
    let collection = mongoResult.db("GoJobber").collection("Users");
    let response = await collection.find({}).toArray();
    return response;
}

//get User Profile
const UserProfile = async(req, res) => {
    console.log("User Profile", req.body.email)
    let collection = mongoResult.db("GoJobber").collection("Users");
        collection.find({ email: req.body.email }).toArray().then((result, err) => {
            // console.log(result)
            res.status(200).send({ result: result })
            return
        })

}

// Edit User Profile
const editUserProfile = async(req, res) => {
    console.log("profile", req.body.email)
    let collection = mongoResult.db("GoJobber").collection("Users");
    var newvalues = { $set: {email: req.body.email, name:req.body.name, age:req.body.age,
        yearsOfExperience:req.body.yearsOfExperience, education:req.body.education, cnic:req.body.cnic, 
        phoneNo:req.body.phoneNo, location:req.body.location, experience:req.body.experience,
        about:req.body.about,  skills:req.body.skills, allowAlerts:req.body.allowAlerts
    } };
        collection.updateOne({ email: req.body.email },newvalues,(result, err) => {
            if (!err){
            res.status(200).send({ message: "Profile Updated" })
            return
            }
        })

}

// All Jobs
async function getJobs() {
    let collection = mongoResult.db("GoJobber").collection("Jobs");
    let response = await collection.find({}).toArray();
    return response;
}


// All Jobs acc to Category
const jobsAccToCategory = async(req, res) => {
    console.log("jobs acc to category", req.body.jobCategory)
    let collection = mongoResult.db("GoJobber").collection("Jobs");

        collection.find({ jobCategory: req.body.jobCategory }).toArray().then((result, err) => {
            // console.log(result)
            res.status(200).send({ result: result })
            return
        })

}


// Signup
const postData = async(req, res) => {
    let collection = mongoResult.db("GoJobber").collection("Users");
    collection.findOne({ email: req.body.email }).then((user, err) => {
        if (user) {
            res.status(400).send({ message: "Failed! Email already exist", variant: "danger" });
            console.log("Failed! Email has already exist")
        } else {
            collection.insertOne({ email: req.body.email, pass: req.body.pass, name: req.body.name }, function(error, response) {
                if (err) throw err;
                res.status(400).send({ message: "Successfully Signup", variant: "success" });
                console.log("Successfully Signup")
            });

        }
        return;
    });

}


//Job Post
const postJob = async(req, res) => {
    let collection = mongoResult.db("GoJobber").collection("Jobs");
    collection.findOne({ jobTitle: req.body.jobTitle }).then((user, err) => {
        if (user) {
            res.status(400).send({ message: "Failed! Job already exist", variant: "danger" });
            console.log("Failed! Job has already exist")
        } else {
            collection.insertOne({
                jobTitle: req.body.jobTitle,
                jobDescription: req.body.jobDescription,
                jobLocation: req.body.jobLocation,
                jobTimings: req.body.jobTimings,
                jobType: req.body.jobType,
                jobCategory: req.body.jobCategory,
                jobEducation: req.body.jobEducation,
                jobExperience: req.body.jobExperience,
                jobVacancies: req.body.jobVacancies,
                companyName: req.body.companyName,
                companyDescription: req.body.companyDescription,
                companyLocation: req.body.companyLocation,
                companyWebsite: req.body.companyWebsite,
                companyLogo: req.body.companyLogo
            }, function(error, response) {
                if (err) throw err;
                res.status(200).send({ message: "Successfully Post", variant: "success" });
                console.log("Successfully Post")
            });

        }
        return;
    });

}



// FInd w.r.t Category and Location
const findData = async(req, res) => {
    console.log("req", req.body.filterLocation, req.body.filterCategory)
    let collection = mongoResult.db("GoJobber").collection("Jobs");

    if (req.body.filterLocation) {

        collection.find({ jobLocation: req.body.filterLocation }).toArray().then((result, err) => {
            // console.log(result)
            res.status(200).send({ result: result })
            return
        })
    } else if (req.body.filterCategory) {

        collection.find({ jobCategory: req.body.filterCategory }).toArray().then((result, err) => {
            // console.log(result)
            res.status(200).send({ result: result })
            return
        })
    } else if (req.body.filterCategory && req.body.filterLocation) {

        collection.find({ jobCategory: req.body.filterCategory, jobLocation: req.body.filterLocation }).toArray().then((result, err) => {
            // console.log(result)
            res.status(200).send({ result: result })
            return
        })
    }

}


// Contact Form
const ContactForm = async(req, res) => {
    let collection = mongoResult.db("GoJobber").collection("ContactFormInfo");
    collection.insertOne({ email: req.body.email, name: req.body.name, mesage: req.body.message }, function(error, response) {
        if (error) throw error;
        console.log("Successfully Submitted Contact form")
        res.status(200).send({ message: "Successfully Filled" })
        return;
    });

}

const SendAlerts = async(req, res) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'wajjuwajahat13@gmail.com',
          pass: '03162150074@'
        }
      });
      
      var mailOptions = {
        from: 'wajjuwajahat13@gmail.com',
        to: req.body.email,
        subject: 'Alert for Jobs',
        text: 'Daily Notifications will be send to you about the New Jobs'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

const UpdateAlert = async(req, res) => {
    let collection = mongoResult.db("GoJobber").collection("Users");
    collection.updateOne({ email: req.body.email },{ $set: {allowAlerts: req.body.allowAlerts}},(result, err) => {
        res.status(200).send({ message: "Alert Updated" })
        return
        
    })
}

// Statistics
async function getStatistics() {
    let companieslist=[];
    let collection = mongoResult.db("GoJobber").collection("Users");
    let user = await collection.find({}).toArray()
    let collection2 = mongoResult.db("GoJobber").collection("Jobs");
    let jobs = await collection2.find({}).toArray()
    jobs.map((e)=>{
        companieslist.push(e.companyName)
    })
    let companies = [...new Set(companieslist)]
    return {candidates:user.length,jobs:jobs.length,companies:companies.length};
}



module.exports = { Login, postData, loadMongoDb, getData, postJob, getJobs, jobsAccToCategory, findData, ContactForm, SendAlerts, UpdateAlert, editUserProfile, UserProfile, getStatistics }