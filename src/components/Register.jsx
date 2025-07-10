// npm i axios

import { useState } from "react";
import axios from 'axios';
export default function Register() {
    const [user, setUser] = useState({});
    const [error, setError] = useState();
    const handleSubmit = async ()=>{
        try{
            // const url = "http://localhost:8080/api/users/register";
            const url = "https://cafe-backend-app.vercel.app/api/users/register"
            const result = await axios.post(url, user)
            setError("Data Saved Successfully");
        }
        catch(err){
            console.log(err);
            setError("Something went wrong");
        }
        console.log(user);
    }
  return (
    <div>
        <h2>Registration Form</h2>
        {error}
        <p>
            <input type="text" placeholder="First Name" onChange={(e)=>setUser({...user, firstName: e.target.value})}></input>
        </p>
        <p>
            <input type="text" placeholder="Last Name" onChange={(e)=>setUser({...user, lastName: e.target.value})}></input>
        </p>
        <p>
            <input type="text" placeholder="Email Address" onChange={(e)=>setUser({...user, email: e.target.value})}></input>
        </p>
        <p>
            <input type="password" placeholder="New Password" onChange={(e)=>setUser({...user, password: e.target.value})}></input>
        </p>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
