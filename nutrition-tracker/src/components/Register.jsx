import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react"
export default function Register() {
    const [user,setUser] = useState({
        name:"",
        email:"",
        password:"",
        age:""
    })
    function HandleInput(event)
    {
        setUser((prevDetails)=>{
            return {...prevDetails,[event.target.name]:event.target.value}
        })
    }
    function HandleSubmit(event)
    {
        event.preventDefault();
        console.log(user)
    }
    return (
        <section className='container'>
            <div className="form-container">
                <h2 className='form-header'>Register</h2>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" onChange={HandleInput} value={user.name} placeholder='Enter Name' name="name" required />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" onChange={HandleInput} value={user.email} placeholder='Enter Email' name="email" required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" onChange={HandleInput} value={user.password} placeholder='Enter password' name="password" required />
                    </div>
                    <div className="form-group">
                        <label>Age</label>
                        <input type="number" onChange={HandleInput} value={user.age} placeholder='Enter Age' name="age" required />
                    </div>
                    <button type="submit" onClick={HandleSubmit}>Register</button>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </form>
        </div>
        </section>
    );
}
