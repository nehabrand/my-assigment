import React, { useState, useContext } from 'react';
import { SharedContext } from './SharedContext';

export const Register = (props) => {
  const { setRegisteredUserData } = useContext(SharedContext);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    if(pass.length<8)
    {
      console.log("password short")
    }
    else
    {
      console.log("valid password")
    }
    e.preventDefault();
    // Simulating registration by setting registered user data
    setRegisteredUserData({ email, password: pass });
    console.log('Registered user:', email);
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" />
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="****" id="password" name="password" />
        <button type="submit">Register</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
  );
};
