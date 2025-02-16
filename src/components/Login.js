import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(' '); // Default role is set to farmer
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const endpoint = role === 'farmer' ? 'http://localhost:5000/login-farmer' : 'http://localhost:5000/login-contractor';

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      if (role === 'farmer') {
        navigate('/farmer-dashboard');
      } else if (role === 'contractor') {
        navigate('/contractor-dashboard');
      }
    } else {
      alert('Invalid email or password');
    }
  };

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
      <label htmlFor="email">Enter Your Email:</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Enter Your Password:</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login as {role.charAt(0).toUpperCase() + role.slice(1)}</button>
      </form>
      <p>
        Haven't registered yet? 
        {role === 'farmer' && (
          <Link to="/signup"> Sign up as Farmer</Link>
        )}
        {role === 'contractor' && (
          <span> or <Link to="/signup-contractor"> Sign up as Contractor</Link></span>
        )}
      </p>
      <div>
        <button onClick={() => handleRoleSelection('farmer')}>Login as Farmer</button>
        <button onClick={() => handleRoleSelection('contractor')}>Login as Contractor</button>
      </div>
    </div>
  );
}

export default Login;
