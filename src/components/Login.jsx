import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:7000/api/auth/login', formData, {withCredentials: true});
      
      // Store user data in localStorage
      localStorage.setItem('userData', JSON.stringify({
        type: response.data.type,
        email: formData.email
      }));

      // Redirect based on user type
      switch(response.data.type) {
        case 'NGO':
          navigate('/ngo-dashboard');
          break;
        case 'Hotel':
          navigate('/hotel-dashboard');
          break;
        case 'Individual':
          navigate('/individual-dashboard');
          break;
        default:
          navigate('/');
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <input 
          name="email" 
          type="email" 
          placeholder="Email" 
          onChange={handleChange} 
          required 
        />
        
        <input 
          name="password" 
          type="password" 
          placeholder="Password" 
          onChange={handleChange} 
          required 
        />
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
