import express  from "express";
import AdminModel from "./AdminModel.js";
import bcrypt, { hash } from "bcrypt"



const Key = Robinkumawat

AdminRouter.post("/register",req,res =>{
    let {name,last,email,password} = req.body 
    bcrypt.hash(password , 10 ,async (err, hash)=>{
        if(err){
            console.error(err);
            return null
        }
        password = hash
let admintoRegister = new AdminModel({name,last,email,password})
    })
})





export default AdminRouter