import React from 'react';

export default function Register() {
    return (
        <section className='form-parent'>
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
                    <p>Already have an account? Sign-in</p>
                </form>
        </div>
        </section>
    );
}
