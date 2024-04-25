//import express package
let express = require('express')

//initialize express app
let app = express()

//configure express app to use JSON encoding/format
app.use(express.json())

let allstars = [
    {
        "id":1,
        "name":"oki",
        "active":true,
        "location":"KL"
    },
    {
        "id":2,
        "name":"mia",
        "active":true,
        "location":"TH"
    },
    {
        "id":3,
        "name":"che",
        "active":true,
        "location":"SG"
    }
]



//create first api
//http://localhost:portnumber/welcome
app.get("/welcome", function (incomingRequest, outgoingResponse){
    console.log("Request receive....")
    outgoingResponse.writeHead(200, {"Content-Type":"text/html"})
    //write something to the response whcih will be sent back to the client
    outgoingResponse.write("<h1>hello from server!</h1>")
    //end the response so that it is sent
    outgoingResponse.end()
})

app.get("/allstars", function (request, response){
    console.log("received request for /allstars")
    response.json(allstars)
    
})


function listeningOnPort(){
    console.log("Listening on port 1234");
}

//expose express app on port
let port = 1234
app.listen(port, listeningOnPort)
