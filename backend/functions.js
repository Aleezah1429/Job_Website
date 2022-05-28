const express = require("express");
const app = express();
const cors = require("cors");
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
const Login = async (req, res) => {
  // console.log("Req", req.body)
  let collection = mongoResult.db("GoJobber").collection("Users");

  collection.findOne({ email: req.body.email }).then((user, err) => {
    if (user) {
      if (user.pass == req.body.pass) {
        res.status(400).send({ message: "Successfully Login",variant:"success" });
        console.log("Successfully Login")
      }
      else {
        res.status(400).send({ message: "Incorrect Password",variant:"danger"  });
        console.log("Incorrect Password")
      }
      return;
    }
    else {
      res.status(400).send({ message: "Incorrect Email",variant:"danger"  });
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


async function getJobs() {
  let collection = mongoResult.db("GoJobber").collection("Jobs");
  let response = await collection.find({}).toArray();
  return response;
}

// Signup

const postData=async(req, res)=> {
  let collection = mongoResult.db("GoJobber").collection("Users");
  collection.findOne({ email: req.body.email }).then((user, err) => {
    if (user) {
      res.status(400).send({ message: "Failed! Email already exist",variant:"danger"  });
      console.log("Failed! Email has already exist")
    }
    else {
      collection.insertOne({email: req.body.email, pass: req.body.pass, name: req.body.name}, function (error, response) {
        if (err) throw err;
        res.status(400).send({ message: "Successfully Signup",variant:"success"  });
      console.log("Successfully Signup")
      });

    }
    return;
  });

}


//Job Post
const postJob=async(req, res)=> {
    let collection = mongoResult.db("GoJobber").collection("Jobs");
    collection.findOne({ jobTitle: req.body.jobTitle }).then((user, err) => {
      if (user) {
        res.status(400).send({ message: "Failed! Job already exist",variant:"danger"  });
        console.log("Failed! Job has already exist")
      }
      else {
        collection.insertOne({jobTitle: req.body.jobTitle, jobDescription: req.body.jobDescription, jobLocation: req.body.jobLocation,
            jobTimings: req.body.jobTimings,jobType: req.body.jobType,jobCategory: req.body.jobCategory,
            jobEducation: req.body.jobEducation,jobExperience:req.body.jobExperience,jobVacancies: req.body.jobVacancies,companyName: req.body.companyName,
            companyDescription: req.body.companyDescription,companyLocation: req.body.companyLocation,companyWebsite: req.body.companyWebsite,
            companyLogo: req.body.companyLogo}, function (error, response) {
          if (err) throw err;
          res.status(400).send({ message: "Successfully Post",variant:"success"  });
        console.log("Successfully Post")
        });
  
      }
      return;
    });
  
  }



  // FInd w.r.t Category and Location

const findData=async(req, res)=> {
  console.log("req",req.body.filterLocation,req.body.filterCategory)
  let collection = mongoResult.db("GoJobber").collection("Jobs");

  if(req.body.filterLocation){

  collection.find({ jobLocation: req.body.filterLocation }).toArray().then((result, err) => {
    // console.log(result)
    res.status(200).send({result:result})
    return 
  })
}

else if(req.body.filterCategory){

  collection.find({ jobCategory: req.body.filterCategory }).toArray().then((result, err) => {
    // console.log(result)
    res.status(200).send({result:result})
    return 
  })
}

else if(req.body.filterCategory && req.body.filterLocation ){

  collection.find({ jobCategory: req.body.filterCategory,jobLocation:req.body.filterLocation }).toArray().then((result, err) => {
    // console.log(result)
    res.status(200).send({result:result})
    return 
  })
}

}


  // Contact Form


const ContactForm=async(req, res)=> {
  let collection = mongoResult.db("GoJobber").collection("ContactFormInfo");
      collection.insertOne({email: req.body.email, name: req.body.name,mesage: req.body.message}, function (error, response) {
        if (error) throw error;
      console.log("Successfully Submitted Contact form")
      res.status(200).send({message:"Successfully Filled"})
    return;
  });

}


module.exports= {Login,postData,loadMongoDb,getData,postJob,getJobs,findData,ContactForm}