const express = require("express");
const { request } = require("http");
const app = express();

let Books = {
    Book1 : "Fire of Wings",
    Book2 : "Harry Potter",
    Book3 : "Enchanted Pool"
}


app.use(logger)

app.get("/books" , (req,res)=>{
    res.send(Books)
})


let libraries = {
    library1 : "Motivational Books",
    library2 : "Magical Books",
    library3 : "Moral books"
}

app.get("/libraries",checkPermission("librarian"),(req,res)=>{
    res.send(libraries)
})


let authors = {
    aurhor1 : "A. P. J. Abdul Kalm",
    aurhor2 : "Author",
    aurhor3 : "C. RajGopalachari"
}

app.get("/authors",checkPermission("author"), (req,res)=>{
    res.send(authors)
})

function logger(req,res,next)
{
    console.log(req.path)
    next();
}

function checkPermission(per)
{
    return function (req,res,next)
    {
        // console.log(request.Object)
        next();
    }
}



app.listen(4000,()=>{
    console.log("Listining at 4000")
})