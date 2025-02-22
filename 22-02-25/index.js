const express = require('express')
const app = express()

app.listen(2000,()=>{
    console.log("Server Started...")
})
let student = [
    { id: 1, name: 'Rohan', age: 20, branch: 'IT' },
    { id: 2, name: 'ravi', age: 21, branch: 'CSE' },
    { id: 3, name: 'rahul', age: 19, branch: 'IT' },
]
app.get("/student",(req,res)=>{
    if(student){
        res.status(200).json(student)
    }else{
        res.status(404).json({
            "message":"empty"
        })
    }
})

app.get("/student/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    let std = student.find(s=>s.id===id)
    if(std){
        res.status(200).json({
            "message":"student found",
            "student":std
        })
    }else{
        res.status(404).json({
            "message":"Not found"
        })
    }
})

app.delete("/studentDel/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const students = student.find(s=>s.id===id)
    if(!students){
        res.status(404).json({
            "message":"not found/deleted back",
        })
    }
    student = student.filter(s=>s.id!==id)
    res.status(200).json({
        "Message":"Student Found, Deleted Successfully",
        "Student":student
    })
})
app.use(express.json());
app.post("/studentPost",(req,res)=>{
    let students = req.body
    student.push(students)
    res.status(200).json({
        "Message":"Insterted Successfully",
        "student":student
    })
})
app.put("/studentPut/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    index = student.findIndex(s=>s.id===id)
    if(index!=-1){
        student[index].name=req.body.name
        student[index].age=req.body.age
        student[index].branch=req.body.branch
        res.status(200).json({
            "Message":"Updated",
            "student":student
        })

    }else{
        res.status(404).json({
            "Message":"Not Found"
        })
    }
})





