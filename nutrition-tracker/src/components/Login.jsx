import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react"
export default function Login() {
    const [userCreds,setUserCreds]= useState({
        email:"",
        password:""
    })
    function handleInput(event)
    {
        setUserCreds((prevDetails)=>{
            return {...prevDetails,[event.target.name]:event.target.value}
        })
    }
    function handleSubmit(event){
        event.preventDefault();
        fetch("http://localhost:8000/login", {
            method: "POST",
            body: JSON.stringify(userCreds),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) =>response.json())
        .then((data)=>{
            console.log(data)
        })
        .catch((err) => {
            console.log(err);
        });
    }
    return (
        <section className='container'>
            <div className="form-container">
                <h2 className='form-header'>Login</h2>
                <form>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" onChange={handleInput} name="email" placeholder='Enter Email' value={userCreds.email} required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" onChange={handleInput} name="password" placeholder='Enter password' value={userCreds.password} required />
                    </div>
                    <button onClick={handleSubmit} type="submit">Login</button>
                    <p>Don't have an account? <Link to="/register">Register</Link></p>
                </form>
            </div>
        </section>
    );
}
