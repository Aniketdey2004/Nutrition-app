import React, { useEffect } from 'react';
import { Link,useNavigate } from "react-router-dom"
import { useState, useContext} from "react"
import { UserContext } from '../contexts/UserContext';
export default function Login() {
    const loggedInData=useContext(UserContext);

    const [userCreds,setUserCreds]= useState({
        email:"",
        password:""
    })

    const [message,setMessage]=useState({
        type:"invisible-msg",
        text:"Dummy msg"
    })

    const navigate = useNavigate();

    function handleInput(event)
    {
        setUserCreds((prevDetails)=>{
            return {...prevDetails,[event.target.name]:event.target.value}
        })
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        fetch("http://localhost:8000/login",{
            method:"POST",
            body:JSON.stringify(userCreds),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((response)=>{
            if(response.status===404)
            {
                setMessage({type:"error",text:"Username or Email Doesnt Exist"});
            }
            else if(response.status===403) {
                setMessage({type:"error",text:"Incorrect Password"});
            }
            setTimeout(()=>{
                setMessage({type:"invisible-msg",text:"Dummy Msg"})
            },5000)
            return response.json();
        })
        .then((data) => {
            if(data.token!==undefined)
            {
                localStorage.setItem("nutrify-user",JSON.stringify(data))
                loggedInData.setLoggedUser(data);
                navigate("/track");
            }
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
                    <p className={message.type}>{message.text}</p>
                </form>
            </div>
        </section>
    );
}
