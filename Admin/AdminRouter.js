import express from "express";
import AdminModel from "./AdminModel.js";
import bcrypt from "bcrypt"
import Jwt from 'jsonwebtoken'



const Key = 'Robinkumawat'

const AdminRouter = express.Router()

AdminRouter.post("/register", (req, res) => {
    let { name, last, email, password } = req.body
    bcrypt.hash(password, 10, async (err, hash) => {
        if (err) {
            console.error(err);
            return null
        }
        password = hash
        let admintoRegister = new AdminModel({ name, last, email, password })
        let result = await admintoRegister.save()
        console.log(result)
        res.json(result)
    })
})

AdminRouter.post('/login', async (req, res) => {

    if (req.body.email && req.body.password) {
        let admintologin = await AdminModel.findOne({ email: req.body.email })
        bcrypt.compare(req.body.email, admintologin.password, (err, result) => {
            if (err || !result) {
                res.status(401).json({ message: "Authentication failed" })
                console.log(err, result)
            }
            else{
                const paylod = {email:admintologin}
                const token = Jwt.sing(paylod,Key,{expiresIn:'1h'})
                res.send(admintologin , token)
            }
        })
    }
})





export default AdminRouter