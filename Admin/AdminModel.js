import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    name:String,
    last:String,
    email:String,
    password:String
});
const AdminModel = mongoose.model("user",AdminSchema)

export default AdminModel