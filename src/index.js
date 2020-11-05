const app = require("express")()
const http = require("http").createServer(app)
const io = require("socket.io")(http)

app.get("/", (req,res)=>{
    res.sendFile(`${__dirname}/client.html`)
})

io.on("connection", function(socket){
    console.log(socket)
    socket.on("messages",(data)=>{
        io.emit("messages",data)
    })
})

http.listen(3000, ()=>{
    console.log("Listening of port 30000")
})