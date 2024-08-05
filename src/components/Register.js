import React, { useState } from 'react';
import './Form.css';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dob: '',
    phone: '',
    address: '',
    gender: '',
    country: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Full Name:
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
      </label>
      <label>
        Email Address:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </label>
      <label>
        Confirm Password:
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
      </label>
      <label>
        Date of Birth:
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
      </label>
      <label>
        Phone Number:
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
      </label>
      <label>
        Address:
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />
      </label>
      <label>
        Gender:
        <label>
          <input type="radio" name="gender" value="male" onChange={handleChange} required /> Male
        </label>
        <label>
          <input type="radio" name="gender" value="female" onChange={handleChange} required /> Female
        </label>
      </label>
      <label>
        Country:
        <select name="country" value={formData.country} onChange={handleChange} required>
          <option value="">Select Country</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
          <option value="India">India</option>
        </select>
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
