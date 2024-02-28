import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {

 //Here, we are receiving the data sent ny context API through Login method   
const {user} = useContext(UserContext);

if(!user) return <div>Please Login</div>
return <div> Welcome {user.username}</div>
}


 export default Profile;