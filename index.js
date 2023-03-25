const express=require("express");
const cors=require("cors");
const app=express();


const port=process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const users=[
    {id:1,name:"Abu Hanif",email:"hanifcse90@gmail.com"},
    {id:2,name:"Abu Hanif Arnob",email:"hanifcse91@gmail.com"},
    {id:3,name:"Arnob",email:"hanifcse92@gmail.com"},
]

app.get("/users",(req,res)=>{
    res.send(users);

});
app.post('/users',(req,res)=>{
    console.log("Post is Update");
    const user=req.body;
    user.id=users.length +1;
    users.push(user);
    res.send(users);
});
app.get('/search',(req,res)=>{
    if(req.query.name){
        const searchValue=req.query.name;
        const filter=users.filter(user=>user.name.toLowerCase().indexOf(searchValue));
        res.send(filter)
    }
    else{
        res.send(users);
    }
})
app.get("/",(req,res)=>{
    res.send("Buss Online Booking is Running");
})

app.listen(port,()=>{
    console.log(`Online Buss Booking server is running on Port ${port}}`);
})