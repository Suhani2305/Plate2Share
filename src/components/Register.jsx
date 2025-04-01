import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    address: { city: '', state: '', pincode: '' },
    userType: '',
    ngoDetails: {
      registrationNumber: '',
      type: '',
      website: '',
      NgoOwnerName: '',
      NgoOwnerPhone: '',
    },
    hotelDetails: {
      registrationNumber: '',
      hotelName: '',
      hotelAddress: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const keys = name.split('.');
      if (keys.length === 1) {
        return { ...prevData, [name]: value };
      } else {
        return {
          ...prevData,
          [keys[0]]: { ...prevData[keys[0]], [keys[1]]: value },
        };
      }
    });

    // If user changes city, fetch new state & pincode
    if (name === 'address.city') {
      fetchCitySuggestions(value);
    }
  };

  const fetchCitySuggestions = async (cityName) => {
    if (cityName.length < 3) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    try {
      const response = await axios.get(`https://api.postalpincode.in/postoffice/${cityName}`);
      if (response.data[0].Status === "Success") {
        const uniqueSuggestions = response.data[0].PostOffice.map(office => ({
          city: office.Name,
          state: office.State,
          pincode: office.Pincode
        }));
        setSuggestions(uniqueSuggestions);
        setShowSuggestions(true);
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setFormData(prevData => ({
      ...prevData,
      address: {
        city: suggestion.city,
        state: suggestion.state,
        pincode: suggestion.pincode
      }
    }));
    setShowSuggestions(false);
    setSuggestions([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Sending data:', JSON.stringify(formData, null, 2));
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:7000/api/auth/register', formData, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });

      alert(response.data.message);
      console.log(response);
      switch (response.data.type) {
        case 'NGO':
          window.location.href = 'http://localhost:3003/';
          break;
        case 'Hotel':
          window.location.href = 'http://localhost:3002/';
          break;
        case 'Individual':
          window.location.href = 'http://localhost:3001/';
          break;
        default:
          window.location.href = 'http://localhost:3000';
      }
    } catch (error) {
      console.error('Error in registration:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Register</h2>
        
        <input name="name" value={formData.name} placeholder="Name" onChange={handleChange} required />
        <input name="email" type="email" value={formData.email} placeholder="Email" onChange={handleChange} required />
        <input name="phone" value={formData.phone} placeholder="Phone" onChange={handleChange} required />
        <input name="password" type="password" value={formData.password} placeholder="Password" onChange={handleChange} required />
        
        <div className="address-input-container">
          <input 
            name="address.city" 
            value={formData.address.city} 
            placeholder="City" 
            onChange={handleChange} 
            required 
            autoComplete="off"
          />
          {showSuggestions && suggestions.length > 0 && (
            <div className="suggestions-container">
              {suggestions.map((suggestion, index) => (
                <div 
                  key={index} 
                  className="suggestion-item"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  <span className="city">{suggestion.city}</span>
                  <span className="state">{suggestion.state}</span>
                  <span className="pincode">{suggestion.pincode}</span>
                </div>
              ))}
            </div>
          )}
          
          {/* Allow Editing State & Pincode */}
          <input 
            name="address.state" 
            value={formData.address.state} 
            placeholder="State" 
            onChange={handleChange} 
            required 
          />
          <input 
            name="address.pincode" 
            value={formData.address.pincode} 
            placeholder="Pincode" 
            onChange={handleChange} 
            required 
          />
        </div>

        <select name="userType" value={formData.userType} onChange={handleChange} required>
          <option value="">Select User Type</option>
          <option value="NGO">NGO</option>
          <option value="Hotel">Hotel</option>
          <option value="Individual">Individual</option>
        </select>

        {formData.userType === 'NGO' && (
          <div className="details-container">
            <input name="ngoDetails.registrationNumber" value={formData.ngoDetails.registrationNumber} placeholder="NGO Registration Number" onChange={handleChange} required />
            <select name="ngoDetails.type" value={formData.ngoDetails.type} onChange={handleChange} required>
              <option value="">Select NGO Type</option>
              <option value="Trust">Trust</option>
              <option value="Society">Society</option>
              <option value="Non-Profit">Non-Profit</option>
            </select>
            <input name="ngoDetails.NgoOwnerName" value={formData.ngoDetails.NgoOwnerName} placeholder="NGO Owner Name" onChange={handleChange} required />
            <input name="ngoDetails.NgoOwnerPhone" value={formData.ngoDetails.NgoOwnerPhone} placeholder="NGO Owner Phone" onChange={handleChange} required />
            <input name="ngoDetails.website" value={formData.ngoDetails.website} placeholder="Website (Optional)" onChange={handleChange} />
          </div>
        )}

        <button type="submit" disabled={loading}>{loading ? 'Please wait...' : 'Register'}</button>
      </form>
    </div>
  );
};

export default Register;
