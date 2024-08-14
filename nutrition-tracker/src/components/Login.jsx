import React from 'react';
import { Link } from 'react-router-dom';
export default function Login() {
    return (
        <section className='container'>
            <div className="form-container">
                <h2 className='form-header'>Login</h2>
                <form>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder='Enter Email' required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder='Enter password' required />
                    </div>
                    <button type="submit">Login</button>
                    <p>Don't have an account? <Link to="/register">Register</Link></p>
                </form>
            </div>
        </section>
    );
}
