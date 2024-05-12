import React from 'react';
import { useAuth } from '../hooks/useAuth'; 

export const Profile = () => {
  const { user } = useAuth(); 

  return (
    <div className="profile-page">
      <h1>Profile</h1>
      {user && (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          { }
        </div>
      )}
    </div>
  );
};
