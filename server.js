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
    {company: "Netflix", staff: 2, duration: "One month", project: "New Arrivals", completed: false, description: "Helped Netflix create a carousel feature for their new arrivals" },
    {company: "Capital-One", staff: 3, duration: "Three months", project: "Investing Branch", completed: true, description: "Helped Capital One create their newest financial service of investing with crypto"},
    {company: "ESPN", staff: 1, duration: "Three weeks", project: "NBA Play-Offs Interface", completed: true, description: "Helped ESPN create the newest interface for the NBA play-offs"},
]

const CONTACTUS = {
    email: "karlonchris2020@gmail.com",
    phoneNumber: "(555)-555-5555",
    address: "124 Main Street, Charlestown, VA, 12345",
    hoursOperation: "Mon - Fri * 8AM - 4PM CST",
    isOpen: true,
}

const LINKS = [
    {company: "Facebook", url: "https://www.facebook.com/"},
    {company: "Netflix", url: "https://www.netflix.com/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fbrowse"},
    {company: "Capital-One", url: "https://www.capitalone.com/?external_id=WWW_XXXXX_XXX_SEM-Brand_Google_ZZ_ZZ_T_Home_ZZ_b12cc208-32e5-4dba-8c49-61064f8f2b63_86032&target_id=aud-1074200827882:kwd-16416311&oC=CO5ed2SUs1&gad_source=1&gclid=Cj0KCQjwlZixBhCoARIsAIC745DVXZ7GJw7Lgn9NNEVxz_DV7CPxm_4HsW6CURHBm7g6JwTP3vI3fXsaAlGVEALw_wcB"},
    {company: "ESPN", url: "https://www.espn.com/"},
    {company: "Google", url: "https://www.google.com/"},
]

const STAFF = [
    {name: "Karlon Heileman", age: 44, email: "karlonheileman@gmail.com", position: "Co-Founder", bio: "Go Army!", path: "karlon"},
    {name: "Chris Jimenez", age: 29, email: "jimenezchris@gmail.com", position: "Co-Founder", bio: "Go Soccer!", path: "chris"},
    {name: "Courtney Smith", age: 36, email: "smithcourtney@gmail.com", position: "Lead Tech", bio: "Full-Stack Software Engineer with a backgorund in Computer Science from MIT", path: "courtney"},
    {name: "Kim Johnson", age: 32, email: "johnsonkim@gmail.com", position: "Lead Designer", bio: "Front-End Web Designer with a background in Fashion Studies from Cal Tech", path: "kim"},
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
        staff: STAFF
    })
})

app.get("/staff/karlon", (req, res)=>{
    res.render("staff-pages/karlon.ejs", {
        karlon: STAFF[0]
    })
})
app.get("/staff/chris", (req, res)=>{
    res.render("staff-pages/chris.ejs", {
        chris: STAFF[1]
    })
})
app.get("/staff/courtney", (req, res)=>{
    res.render("staff-pages/courtney.ejs", {
        courtney: STAFF[2]
    })
})
app.get("/staff/kim", (req, res)=>{
    res.render("staff-pages/kim.ejs", {
        kim: STAFF[3]
    })
})









//---------------------------------------------------------------\\

    //Links Show Page
app.get("/links", (req, res)=>{
    res.render("links.ejs", {
        links: LINKS
    })
})