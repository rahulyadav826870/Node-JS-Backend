
const EventEmiter =require("events")

const event =new EventEmiter()

// console.log(event)

event.on("sayMyName",()=>{
    console.log("This is my name Rahul")
})
event.on("sayMyName",()=>{
    console.log("This is my name Vinod")
})
event.on("sayMyName",()=>{
    console.log("This is my name Santosh")
})

event.emit("sayMyName")

event.on("singlePage",(statusCode,msg)=>{
    console.log(   `The status Code is ${statusCode} and messagge is ${`msg`} `)
})

event.emit("singlePage",200,"Ok")