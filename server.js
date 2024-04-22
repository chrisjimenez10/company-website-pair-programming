//Import 
const express = require("express");
const morgan = require("morgan");
const { ppid } = require("process");

const app = express();
app.use(morgan("dev"));

const port = 3000;

//Start Express Server
app.listen(port, ()=>{
    console.log(`Listening on Port ${port}`)
})

//Data
const PASTWORK = [
    {company: "Facebook", staff: 4, duration: "two months", project: "Advertising", completed: true },
    {company: "Netflix", staff: 2, duration: "one month", project: "New Arrivals", completed: false },
    {company: "Capital-One", staff: 3, duration: "three months", project: "Investing Branch", completed: true },
    {company: "ESPN", staff: 1, duration: "three weeks", project: "NBA Play-Offs Interface", completed: true },
]















//Routes
app.get("/", (req, res)=>{
    res.render("home.ejs", {

    })
})
    //Copmany History Show Page
app.get("/companyhistory", (req, res)=>{
    res.render("company-history.ejs", {

    })
})
    //Contact Us Show Page
app.get("/contactus", (req, res)=>{
    res.render("contact-us.ejs", {
        
    })
})
    //Past Work Show Page
app.get("/pastwork", (req, res)=>{
    res.render("past-work.ejs", {
        pastWork: PASTWORK
    })
})

app.get("/pastwork/Facebook", (req, res)=>{
    const facebook = req.params.facebook;
    res.render("past-work-pages/facebook.ejs", {

    })
})
app.get("/pastwork/Netflix", (req, res)=>{
    const facebook = req.params.facebook;
    res.render("past-work-pages/netflix.ejs", {

    })
})
app.get("/pastwork/Capital-One", (req, res)=>{
    const facebook = req.params.facebook;
    res.render("past-work-pages/capital-one.ejs", {

    })
})
app.get("/pastwork/ESPN", (req, res)=>{
    const facebook = req.params.facebook;
    res.render("past-work-pages/espn.ejs", {

    })
})

//--------------------------------------------------------------\\
    
//Staff Show Page
app.get("/staff", (req, res)=>{
    res.render("staff.ejs", {

    })
})
    //Links Show Page
app.get("/links", (req, res)=>{
    res.render("links.ejs", {

    })
})