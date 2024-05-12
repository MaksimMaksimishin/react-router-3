import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

export const ProfileEdit = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      await fetch('/api/profile/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      console.log('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
      setError(error.message);
    }
  };

  return (
    <div className="profile-edit-page">
      <h1>Edit Profile</h1>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        { }
        <button type="submit">Save</button>
      </form>
    </div>
  );
};
