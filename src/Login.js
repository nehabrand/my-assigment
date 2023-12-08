import React, { useState, useContext } from 'react';
import { SharedContext } from './SharedContext';

export const Login = (props) => {
  const { registeredUserData } = useContext(SharedContext);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the entered email and password match the registered user's data
    if (registeredUserData && email === registeredUserData.email && pass === registeredUserData.password) {
      console.log('Login successful!');
      // Redirect or perform actions after successful login
    } else {
      console.log('Invalid credentials');
      // If user not registered, switch to registration form
      props.onFormSwitch('register');
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="****"
          id="password"
          name="password"
        />
        <button type="submit">Log In</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('register')}>If you have not regsietred. Register here.</button>
    </div>
  );
};
