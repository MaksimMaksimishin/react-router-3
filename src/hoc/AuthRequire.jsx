import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const AuthRequire = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;
  const { user } = useAuth();

  if (!user) {
    return <Navigate to='/login' state={{ from: pathname }}/>
  }

  return children;
};
