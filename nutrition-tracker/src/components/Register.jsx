import React from 'react';
import { Link } from 'react-router-dom';
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
    return (
        <section className='container'>
            <div className="form-container">
                <h2 className='form-header'>Register</h2>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" placeholder='Enter Name' required />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder='Enter Email' required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder='Enter password' required />
                    </div>
                    <div className="form-group">
                        <label>Age</label>
                        <input type="number" placeholder='Enter Age' required />
                    </div>
                    <button type="submit">Register</button>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </form>
        </div>
        </section>
    );
}
