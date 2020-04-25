const importFunc = require("./func")

const express = require('express');
const path = require('path');
// const handler = (request, response) => {
//     console.log("25.04")
//     response.end("Hello World")
// // }
// const server = http.createServer(handler);
const app = express();
const port = process.env.PORT || 3000;
app.set("view engine", 'hbs');
app.use("/assets", express.static(path.join(__dirname, "./assets")))
app.use("/js", express.static(path.join(__dirname, "./js")))

app.get("/", function (req, res){
    const sample = () => {
        return "Nauka"
    }
    res.render('index', {
        pageTitle: "Lekcja NodeJS 25.04",
        subTitle: importFunc.someTitle,
        newVar: sample()
    })
})

app.get("/portfolio", function (req, res){
    res.render("My portfolio")
})

app.get("/marcin", function (req, res){
    res.render("Marcin")
})
// const functions = require('./functions')

// functions.helloWorld();
// functions.sum(1,4);

app.listen(port, (err) => {
    console.log("serwer działa na porcie", port)
    if (err) {return console.log("Błąd serwera", err)}
})