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
    {company: "Facebook", staff: 4, duration: "Two months", project: "Advertising", completed: true, description: "Helped Facebook create a robust and dynamic advertising feature" },
    {company: "Netflix", staff: 2, duration: "one month", project: "New Arrivals", completed: false, description: "Helped Netflix create a carousel feature for their new arrivals" },
    {company: "Capital-One", staff: 3, duration: "three months", project: "Investing Branch", completed: true, description: "Helped Capital One create their newest financial service of investing with crypto"},
    {company: "ESPN", staff: 1, duration: "three weeks", project: "NBA Play-Offs Interface", completed: true, description: "Helped ESPN create the newest interface for the NBA play-offs"},
]

const CONTACTUS = {
    email: "karlonchris2020@gmail.com",
    phoneNumber: "(555)-555-5555",
    address: "124 Main Street, Charlestown, VA, 12345",
    hoursOperation: "Mon - Fri * 8AM - 4PM CST",
    isOpen: true,
}















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
        contactUs: CONTACTUS
    })
})
    //Past Work Show Page
app.get("/pastwork", (req, res)=>{
    res.render("past-work.ejs", {
        pastWork: PASTWORK
    })
})

app.get("/pastwork/Facebook", (req, res)=>{
    res.render("past-work-pages/facebook.ejs", {
        facebook: PASTWORK[0]
    })
})
app.get("/pastwork/Netflix", (req, res)=>{
    res.render("past-work-pages/netflix.ejs", {
        netflix: PASTWORK[1]
    })
})
app.get("/pastwork/Capital-One", (req, res)=>{
    res.render("past-work-pages/capital-one.ejs", {
        capitalOne: PASTWORK[2]
    })
})
app.get("/pastwork/ESPN", (req, res)=>{
    res.render("past-work-pages/espn.ejs", {
        espn: PASTWORK[3]
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